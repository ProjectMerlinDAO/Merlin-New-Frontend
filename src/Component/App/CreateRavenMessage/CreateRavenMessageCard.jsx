import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppInput from "../../Core/AppInput";
import RavenUploadImg from "./RavenUploadImg";
import UploadOptional from "./UploadOptional";
import ProposalDetail from "./ProposalDetail";
import ProjectGoal from "./ProjectGoal";
import OwningProjectMerlin from "./OwningProjectMerlin";
import Categories from "./Categories";
import Cost from "./Cost";
import PreviewCard from "./PreviewCard";
import { useStickyBox } from "react-sticky-box";
import { useAccount } from "wagmi";
import axios from "axios";
import { toast } from "react-toastify";

const CreateRavenMessageCard = ({ isSidebarVisible }) => {
  const { address } = useAccount();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });

  const [data, setData] = useState({
    title: "",
    shortBrief: "",
    avatarImage: "",
    images: {},
    proposalDetail: "",
    videoLink: "",
    projectGoal: 0,
    mrlnAmt: 0,
    memberNft: "",
    cost: 0,
    fee: 0,
    termsAndConditions: false,
    categories: [],
  });

  const [uploadImages, setUploadImages] = useState({
    avatarImage: "",
    images: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "memberNft" && value === "Yes"){
      toast.error("You don't have a community NFT. Please select 'No'.")
      return;
    }
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategory = (e) => {
    const { name, checked } = e.target;
    if (checked == true) {
      setData((prev) => ({
        ...prev,
        categories:[...data.categories,name]
      }))
    } else if (checked == false) {
      if (data.categories.includes(name)) {
        setData((prev) => ({
          ...prev,
          categories : data.categories.filter((item) => item != name)
        }))
      }
    }
    if (name === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        termsAndConditions: !prevData.termsAndConditions,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatarImage", image.avatarImage);
      Object.values(image.images).forEach(file => {
        formData.append("images", file);
      });
      const imageUrls = await axios.post(`${baseUrl}/image/Upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  if(imageUrls.status === 200){
    let obj = {
      ...data,
      avatarImage : imageUrls?.data?.avatarImageUrl,
      images : imageUrls.data?.imageUrls

    }
    const createMsg = await axios.post(`${baseUrl}/raven/create-raven`, obj);
    console.log(createMsg);
  }
    } catch (error) {
      console.log(error);
    }
  };
  
  const calculateCost = () => {
    let fee = 0;
    if(data.categories.length === 1){
      fee = 300;
    }
    if(data.categories.length > 1){
      fee = 300 + 150 * (data.categories.length -1);
    }
    setData((prev) => ({
      ...prev,
      fee: fee
    }))
  }
  useEffect(() => {
   calculateCost();
  },[data.categories])
  console.log(data.memberNft,"DATA")
  return (
    <div
      className="pt-[110px] relative bg-no-repeat position-top bg-contain"
      style={{
        backgroundImage: "url(./assets/images/bg/sub-bg.png)",
        backgroundSize: "100% 388px",
      }}
    >
      <div
        className={`app-home-wrapper ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <div
            className="p-[60px] 2xl:py-[40px] 2xl:px-[20px] rounded-[40px] relative backdrop-blur-[15px] overflow-hidden"
            style={{
              background:
                "linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)",
            }}
          >
            <Image
              src="/assets/images/shape/raven-card-shape.png"
              fill={true}
              className="top-0 left-0 z-0 mt-[-40%] ml-[-20%]"
            />
            <div className="relative z-10">
              <h2 className="text-white text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] leading-[162.5%] font-[700] quantico uppercase">
                Create Raven Message
              </h2>
              <div className="flex items-start justify-start mx-[-15px] xl:flex-wrap row">
                <div className="w-[65%] lg:w-full px-[15px]">
                  <div className="max-w-[750px]">
                    <p className="mb-[40px] xl:mb-[30px]">
                      Get funds of your project by creating a Raven message,
                      Send us details of you proposal to publish it.
                    </p>
                    <div className="flex items-center justify-between rounded-[18px] px-[20px] py-[13px] bg-gradient-to-r from-[#ffffff10] to-[#ffffff05] gap-[20px] mb-40px">
                      <div className="flex items-center justify-start gap-[15px]">
                        <div className="h-[40px] relative w-[40px] rounded-full overflow-hidden flex items-center justify-center">
                          <Image
                            src="/assets/images/coins/eth.png"
                            alt="coin"
                            fill={true}
                          />
                        </div>
                        <p className="mb-0">
                          <span className="text-white leading-[16px]">
                            {address
                              ? address.slice(0, 4) + "...." + address.slice(-5)
                              : null}
                          </span>
                          <br />
                          <span className="text-[14px] leading-[14px]">
                            Ethereum
                          </span>
                        </p>
                      </div>
                      <button className="text-[14px] text-[#12CFA7] rounded-[10px] px-[15px] py-[4px] bg-[#12cfa615]">
                        Connected
                      </button>
                    </div>
                    <div className="mt-[40px] xl:mt-[30px]">
                      <AppInput
                        inputTitle="Project Title"
                        inputPlaceholder="Enter a title explaining your need for funding"
                        inputType="text"
                        onChange={(e) => handleChange(e)}
                        name="title"
                      />
                    </div>
                    <div className="mt-[40px] xl:mt-[30px]">
                      <AppInput
                        inputTitle="Short Brief"
                        inputPlaceholder="Explain why you need this fund in 120 characters"
                        inputType="text"
                        onChange={(e) => handleChange(e)}
                        name="shortBrief"
                      />
                    </div>
                    <RavenUploadImg image={uploadImages} setImage={setUploadImages} />
                    <UploadOptional image={uploadImages} setImage={setUploadImages} />
                    <ProposalDetail
                      onChange={(e) => handleChange(e)}
                      name="proposalDetail"
                    />
                    <div className="mt-[40px] xl:mt-[30px]">
                      <AppInput
                        inputTitle="Share Video Link (YouTube or Vimeo)"
                        inputSubTitle="(Optional)"
                        inputPlaceholder="You can add a video explaining your funding application purpose"
                        inputType="text"
                        onChange={(e) => handleChange(e)}
                        name="videoLink"
                      />
                    </div>
                    <ProjectGoal
                      name="projectGoal"
                      onChange={(e) => handleChange(e)}
                      value={data.projectGoal}
                    />
                    <OwningProjectMerlin
                      onChange={(e) => handleChange(e)}
                      name="memberNft"
                    />
                    <Categories onChange={(e) => handleCategory(e)} />
                    <Cost data={data}/>
                    <div className="flex items-start justify-start gap-[10px] mt-[30px]">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="rounded-full checkbox checkbox-accent mt-[4px]"
                        onChange={(e) => handleCategory(e)}
                      />
                      <p>
                        I accept the{" "}
                        <a href="#" className="text-white underline">
                          Term of Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-white underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="hov-btn btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]"
                    >
                      <span className="btn-hov-text !h-[27px]">
                        <span className="btn-text">Submit Your Message</span>
                        <span className="btn-text">Submit Your Message</span>
                      </span>
                    </button>
                  </div>
                </div>
                <aside
                  ref={stickyRef}
                  className="w-[35%] lg:w-full px-[15px] mt-[40px] xl:mt-[30px]"
                >
                  <PreviewCard
                    title={data.title}
                    goal={Number(data.projectGoal) * 0.5}
                    img={data.avatarImage}
                    category={data.categories}
                  />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateRavenMessageCard;
