import React, { useState } from "react";
import { useSelector } from "react-redux";
import mainloader from "../assets/mainloader.gif";

function Loader({ text }) {
  const theme = useSelector((state) => state.UserReducer.theme);

  return (
    <>
      <div className="">
        <div
          className="position-fixed w-100 mainLoader"
          style={{
            zIndex: 1100000000000,
            // marginTop: -200,
            height: '100%',
            marginLeft: 0,
            background: "rgba(0, 0, 0, 0.6)",
            top: '0px',
            left: '0px'
          }}
        >
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img width={150} className="mt-n4" src={mainloader} alt="" />
              <h2
                className="text-white w-100 text-center mt-5"
              >
                {text}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;