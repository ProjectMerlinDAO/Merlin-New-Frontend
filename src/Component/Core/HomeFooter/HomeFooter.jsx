import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const HomeFooter = () => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [email, setEmail] = useState("");

// Function for validating the email::::
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
//   function saving the mail in the backend:::::
const handelEmailSubscription = async (e) => {
  try {
    e.preventDefault();
    if(email === ""){
      toast.error("Email can't be empty");
      return;
    }
    if (email && isValidEmail(email)) {
      const subs = await axios.post(
        `${baseUrl}/user/emailSubscription`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(subs.status === 200){
        toast.success(subs.data.msg);
        setEmail("");
      }else if(subs.status === 409){
        toast.warning(subs.data.msg);
        setEmail("");
      }
    } else {
      toast.error("Email is not valid!",{className: 'bg-black-500 text-white',
      progressClassName: 'bg-green-500'});
      return;
    }
  } catch (error) {
    console.log(error?.response?.data?.msg);
    toast.error(error?.response?.data?.msg,{className:"toast-error"});
    setEmail("");
    return;
  }
};
  return (
    <div className="home-footer-section">
      <div className="px-[20px] md:px-[14px] max-w-[1450px] mx-auto lg:max-w-[720px]">
        <div className="home-footer-content">
          <div className="max-w-[140px] mx-auto text-center mt-[-230px] lg:mt-[-320px]">
            <img src="../assets/images/logo/fevicon.svg" alt="logo" />
          </div>
          <div className="relative flex flex-wrap-reverse">
            <div className="w-2/6 lg:w-full">
              <div className="home-footer-left">
                <h3>Project Merlin</h3>
                <p>
                  Project Merlin is a next-generation crowdfunding DAO
                  ecosystem. Our community supports the production of values
                  that benefit the ecosystem, while also earning rewards through
                  a unique vote2earn mechanism.
                </p>
                <ul>
                  <li className="social-icon-btn">
                    <Link
                      href="https://t.me/ProjectMerlin"
                      target="_blank"
                      className="flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[#FFFFFF05] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[28px]">
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/telegram.svg"
                            alt="icon"
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/telegram.svg"
                            alt="icon"
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="social-icon-btn">
                    <Link
                     href="https://www.linkedin.com/company/projectmerlinio"
                       target="_blank"
                      className="flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[#FFFFFF05] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[34px]">
                        <span className="btn-icon my-[0px]">
                          <img src="./assets/images/icons/in.svg" alt="icon" />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img src="./assets/images/icons/in.svg" alt="icon" />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="social-icon-btn">
                    <Link
                       href="https://discord.gg/projectmerlin"
                      target="_blank"
                      className="flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[#FFFFFF05] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[28px]">
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/discord2.svg"
                            alt="icon"
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/discord2.svg"
                            alt="icon"
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="social-icon-btn">
                    <Link
                      href="https://twitter.com/ProjectMerlinio"
                      target="_blank"
                      className="flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[#FFFFFF05] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[34px]">
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/x.svg"
                            alt="icon"
                            className="w-[20px]"
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/x.svg"
                            alt="icon"
                            className="w-[20px]"
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ol>
                  <li>
                    <Link href="/terms-and-Conditions" target="_blank">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacyPolicy" target="_blank">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookiesPolicy" target="_blank">
                      Cookies Policy
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <div className="w-2/6 lg:w-full">
              <div className="home-footer-center mt-[180px] lg:mt-0">
                <div className="mb-[80px] lg:mb-0 lg:absolute top-[30px]">
                  <Link
                     href="https://discord.gg/projectmerlin"
                   target="_blank"
                    className="hov-btn btn-has-shape gap-[7px] bg-[#5865F2] rounded-full backdrop-blur-[5px] h-[60px] w-[220px] mx-auto flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico mt-[20px]"
                  >
                    <Image
                      src="/assets/images/icons/discord.svg"
                      alt="icon"
                      className="mt-0"
                      width="25"
                      height="20"
                    />
                    <span className="btn-hov-text">
                      <span className="btn-text">JOIN DISCORD</span>
                      <span className="btn-text">JOIN DISCORD</span>
                    </span>
                  </Link>
                </div>
                <Link
                  href="#"
                  className="back-to-top flex items-center justify-center gap-[8px] lg:!bottom-[-50px]"
                >
                  Back to top
                  <img src="../assets/images/icons/back-top-icon.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="w-2/6 lg:w-full lg:mt-[150px]">
              <div className="home-footer-right">
                <h4>Stay connected & Get Updates</h4>
                <p>
                  Sign up with your email address to receive news and updates
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <button
                    type="submit"
                    className="hov-btn btn-has-shape bg-[#12CFA7] rounded-full backdrop-blur-[5px] h-[50px] w-[150px] mx-auto flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico"
                    onClick={(e) => handelEmailSubscription(e)}
                  >
                    <span className="btn-hov-text lg:mt-[10px]">
                      <span className="btn-text">Subscribe</span>
                      <span className="btn-text">Subscribe</span>
                    </span>
                  </button>
                </form>
                <h5>
                  Mail us:{" "}
                  <Link href="mailto:info@projectmerlin.io">
                    info@projectmerlin.io
                  </Link>
                </h5>
                <ul>
                  <li>
                  <Link href={router.pathname === "/" ? "#home" : "/#home"}>Home</Link>
                  </li>
                  <li>
                  <Link href={router.pathname === "/" ? "#tokeneconomics" : "/#tokeneconomics"}>Token</Link>
                  </li>
                  <li>
                  <Link href="https://docs.projectmerlin.io/projectmerlin" target="_blank">
                      Docs
                    </Link>
                  </li>
                  <li>
                  <Link href="/about" target="_blank">About</Link>
                  </li>
                  <li>
                  <Link href={router.pathname === "/" ? "#faq" : "/#faq"}>FAQ</Link>
                  </li>
                  <li>
                  <Link className="pointer-events-none text-gray-500 opacity-10"  href="/articles">Articles</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
