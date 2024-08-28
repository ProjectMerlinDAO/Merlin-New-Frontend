'use client'
import Image from "next/image";

export default function Loading  ()  {
    // const { loading } = useTokenStore((state) => state);
    return (
      <>
        {/* {loading && ( */}
          <div
            className="loader"
            style={{
              color: "white",
              top: "0",
              left: "0",
              right: "0",
              margin: "0 auto",
              zIndex: 50,
              position: "fixed",
              height: "100%",
              width: "100%",
              background: "rgba(0, 0, 0, .5)",
              bottom: 0,
              display: "grid",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Image
            //   className="loading"
              src={"/assets/images/spin.gif"}
              alt="loading"
              width={105}
              height={105}
            />
          </div>
        {/* )} */}
      </>
    );
  };