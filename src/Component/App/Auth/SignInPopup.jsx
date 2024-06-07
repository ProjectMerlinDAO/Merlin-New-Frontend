import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CommonerSignIn from "./CommonerSignIn";
import { useWeb3Modal } from '@web3modal/ethers/react'


const SignInPopup = ({ isOpen, setIsOpen }) => {
  const { open } = useWeb3Modal()
  const [showCommonerSignIn, setShowCommonerSignIn] = useState(false);
  const dialogRef = useRef(null);
  const handleCommonerClick = () => {
    setShowCommonerSignIn(true);
  };
  const handleBackClick = () => {
    console.log("dlelel;el,el;lelel;")
    setShowCommonerSignIn(false);
  };
  // id="signInModal"
  console.log(showCommonerSignIn,"sweeedfewwedfwefewfew")
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
      dialog.addEventListener('close', handleClose);
    }
    return () => {
      if (dialog) {
        dialog.removeEventListener('close', handleClose);
      }
    };
  }, [isOpen, setIsOpen]);

  const handleWalletConnect = () => {
    // document.getElementById('signInModal').close();
    setIsOpen(false);
    open();
   }
  return (
    <>
      {isOpen ? (
        <div>
          <dialog ref={dialogRef}  className="modal">
            <div className="modal-box max-w-[570px] w-full bg-transparent p-0">
              {!showCommonerSignIn ? (
                <div className="relative bg-[#27312E] rounded-[30px] p-[50px] w-full overflow-hidden text-center flex items-center justify-center flex-col">
                  <div className="h-[133px] w-[133px] rounded-[50%] bg-[#12CFA7] blur-[100px] mx-auto top-[-65px] z-0 absolute"></div>
                  <div className="relative z-0">
                    <h3 className="mb-[25px] text-[30px] text-white quantico font-[700] uppercase">
                      Sign in As
                    </h3>
                    <p className="mb-[25px] text-[16px]">
                      Do you have Project Merlin Community NFT? Please sign in
                      with a community member, If you don’t have, Please sign in
                      as Commoner
                    </p>
                    <button
                      onClick={handleWalletConnect}
                      className="hov-btn btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mb-[30px]"
                    >
                      <span className="btn-hov-text !h-[27px]">
                        <span className="btn-text">Commoner</span>
                        <span className="btn-text">Commoner</span>
                      </span>
                    </button>
                    <button
                      type="submit"
                      className="hov-btn btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mb-[0px]"
                      onClick={handleCommonerClick}
                    >
                      <span className="btn-hov-text !h-[27px]">
                        <span className="btn-text">Community Member</span>
                        <span className="btn-text">Community Member</span>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative commoner-signin">
                  <div
                    className="flex items-center justify-start cursor-pointer mb-[10px]"
                    onClick={handleBackClick}
                  >
                    <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center backdrop-blur-[5px] mr-[5px]">
                      <img
                        src="../assets/images/icons/back-arrow.svg"
                        alt="icon"
                      />
                    </div>
                    <span>Back</span>
                  </div>
                  <CommonerSignIn isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
              )}
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      ) : null}
    </>
  );
};
export default SignInPopup;
