import React from "react";
import { useState } from "react";
import Basic from "./Basic";



const Popup = () => {

  const [bool, setBool] = useState(false);


  const handleClose = () => {
    setBool(false);
  };
  const handleOpen = () => {
    console.log("cliked button");
    setBool(true);
  };
   const title = {
       color:"red",
       fontSize:"10px"
   }


  return (
    <>
        {/* shakes popup */}
        <div
        className={bool ? "open" : "close"}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backdropFilter: "blur(2px) brightness(90%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
          color: "white",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "600px",
            background: "#222",
            border: "2px solid white",
            padding: "10px",
          }}
        >
          <h3 style={{ fontSize: "20px" }}>CREATE SHOWS</h3>
          <hr style={{ width: "100px", margin: "10px 0" }} />
          <p style={title }>
            <b>NOTE :</b> ONLY SHOWS WITH VIDEOS UNDERNEATH THEM ARE VISIBLE TO
            THE PUBLIC
          </p>
          <div
            style={{
              height: "270px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "50%",
                padding: "10px ",
              }}
            >
         
                   <Basic/>
              {/* <div
                style={{
                  height: "200px",
                  background: "#444",
                  margin: "10px 0",
                }}
              ></div> */}
            </div>
            <div
              style={{
                width: "50%",
                padding: "10px ",
              }}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                style={{
                  padding: "15px",
                  margin: "10px 0",
                  width: "100%",
                  background: "#555",
                  border: "none",
                }}
              />
              <textarea
                name=""
                cols="30"
                rows="5"
                placeholder="Show message"
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  width: "100%",
                  background: "#555",
                  border: "none",
                }}
              ></textarea>
              <button
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={handleClose}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* the button that activates the pop up */}
      <button
        onClick={handleOpen}
        style={{ padding: "10px", cursor: "pointer", margin: "40px 0" }}
      >
        open
      </button>
      </>
  );
};
export default Popup;