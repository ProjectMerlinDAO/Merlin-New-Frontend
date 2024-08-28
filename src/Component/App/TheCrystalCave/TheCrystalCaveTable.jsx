import React, { useState, useEffect } from "react";
import ScarchBox from "../../Core/ScarchBox";
import Dropdown from "../../Core/Dropdown";
import Image from "next/image";
import CategoriesDropdown from "../../Core/CategoriesDropdown";
import Pagination2 from "../../Core/Pagination2";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";

const TheCrystalCaveTable = () => {
  const { publicKey } = useWallet();
 const key = publicKey?.toBase58()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [msgList, setMsgList] = useState();
  const [totalPages, setTotalPages] = useState();
  
  const fetchMsgs = async () => {
    const queryUrl = `?search=${search}&categories=${category}&sort=${sort}&page=${page}`;
    const data = await axios.get(
      `${baseUrl}/raven/fetch-all-raven/${queryUrl}`
    );
    if (data.status === 200) {
      setMsgList(data.data?.ravenMsgs);
      setTotalPages(data?.data?.numOfPages);
    }
  };
  const handleClick = (id) => {
    router.push({
      pathname: "/raven-detail",
      query: {
        id: id,
      },
    });
  };

  const handleLike = async (id) => {
    if(!key){
      return toast.error("Please connect wallet to proceed further")
    }
      const like = await axios.post(`${baseUrl}/raven/like`, {
        id,
        key,
      });
      if(like.status === 200 && like.data.msg === "Success"){
        fetchMsgs();
        return;
      }
  };

  const handleDislike = async (id) => {
    if(!key){
      return toast.error("Please connect wallet to proceed further")
    }
      const disLike = await axios.post(`${baseUrl}/raven/dislike`, {
        id,
        key,
      });
     if(disLike.status === 200 && disLike.data.msg === "Success"){
      fetchMsgs();
      return;
     }
  };
  useEffect(() => {
    fetchMsgs();
  }, [search, category, sort, page]);
  return (
    <div
      className="rounded-[40px] backdrop-blur-[15px] p-[60px] 2xl:py-[35px] 2xl:px-[25px] xl:px-[20px]"
      style={{
        background:
          "linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)",
      }}
    >
      <div className="flex items-center justify-between gap-[20px] flex-wrap mb-[30px] xl:mb-[15px]">
        <h2 className="text-[40px] 2xl:text-[32px] leading-[130%] font-[700] text-white quantico uppercase">
          The crystal cave
        </h2>
        <div className="flex items-center justify-between gap-[20px] lg:gap-[4%] lg:mb-[10px] lg:flex-wrap">
          <div className="max-w-[300px] xl:max-w-full w-full lg:mb-[20px]">
            <ScarchBox search={search} setSearch={setSearch} />
          </div>
          <div className="w-[194px] xl:w-[48%]">
            <CategoriesDropdown setCategory={setCategory} category={category} />
          </div>
          <div className="w-[194px] xl:w-[48%]">
            <Dropdown btnTitle="Other Filters" setSort={setSort} sort={sort} />
          </div>
        </div>
      </div>
      <div className="lg:overflow-x-scroll">
        <div className="xl:text-[14px] min-w-[950px] ">
          <ul className="flex items-center justify-between py-[15px] uppercase">
            <li className="pl-[30px] xl:pl-[15px] pr-[15px] w-[40%]">
              Raven Message
            </li>
            <li className="px-[15px] xl:px-[5px] w-[15%]">GOAL</li>
            <li className="px-[15px] xl:px-[5px] w-[15%]">Categories</li>
            <li className="px-[15px] xl:px-[5px] w-[15%]">User Type</li>
            <li className="px-[15px] xl:px-[5px] pr-15px w-[15%] text-right xl:min-w-[max-content]">
              Like / Dislike
            </li>
          </ul>
          {msgList ? (
            msgList?.map((data, index) => {
              return (
                  <>
                  <ul
                  key={index}
                    className="rounded-[20px] mb-[15px] relative crystal-table-row backdrop-blur-[10px] py-[15px] flex items-center justify-between"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%);",
                    }}
                  >
                    <li className="w-[40%] px-[15px] xl:pr-[5px] z-10 " >
                      <div className="flex items-center justify-start cursor-pointer" onClick={() => handleClick(data?._id)} >
                        <div className="min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-[15px] overflow-hidden">
                          <Image
                            src={data?.avatarImage}
                            alt="img"
                            className="object-cover w-full h-full"
                            width="60"
                            height="60"
                          />
                        </div>
                        <div className="ml-[14px]">
                          <h3 className="overflow-hidden text-ellipsis text-[20px] lg:text-[18px] md:text-[16px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] 2xl:max-w-[260px]">
                            {data.title}
                          </h3>
                          <p className="text-[16px] lg:text-[15px] md:text-[14px] font-[300] lexend uppercase">
                            {data.author}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="px-[15px] xl:px-[5px] w-[15%]">
                      <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">
                        {data.projectGoal}
                      </span>
                    </li>
                    <li className="px-[15px] xl:px-[5px] w-[15%]">
                      <div className="flex items-center justify-start gap-[20px]">
                        {data.categories.map((item, index) => {
                          return (
                            <div
                              className="tooltip"
                              data-tip={item}
                              key={index}
                            >
                              <Image
                                src={`/assets/images/img/${item}.png`}
                                alt="icon"
                                width={34}
                                height={34}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </li>
                    <li className="px-[15px] xl:px-[5px] w-[15%]">
                      <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">
                        {data.UserType}
                      </span>
                    </li>
                    <li className="px-[15px] xl:pr-0 w-[15%] text-right pr-[15px] z-10">
                      <div className="flex items-center justify-end gap-[5px]">
                        <button
                          className="rounded-full flex items-center justify-center gap-[6px] px-[14px] h-[32px] bg-[#19c85f33] "
                          onClick={() => handleLike(data._id)}
                        >
                          <Image
                            src="/assets/images/icons/like.svg"
                            alt="icon"
                            width="13"
                            height="12"
                          />
                          <span>{data.like.length}</span>
                        </button>
                        <button
                          className="rounded-full flex items-center justify-center gap-[6px] px-[14px] h-[32px] bg-[#e32d2d26]"
                          onClick={() => handleDislike(data._id)}
                        >
                          <Image
                            src="/assets/images/icons/dislike.svg"
                            alt="icon"
                            width="13"
                            height="12"
                          />
                          <span>{data.dislike.length}</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                  </>
              );
            })
          ) : (
            <p>No msgs yet</p>
          )}
        </div>
      </div>
      <div className="mt-[30px]">
        <Pagination2 totalPages={totalPages} page={page} setPage={setPage} />
      </div>
    </div>
  );
};
export default TheCrystalCaveTable;
