import React from "react";
import "./presentation.css";

export default function Presentation() {
  return (
    <div className="presentation-body">

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="presentation-container">

        <textarea
          id="inputText"
          placeholder="Type text to convert..."
        ></textarea>

        <button
          onClick={() => alert("This is presentation only — backend not connected")}
        >
          Generate
        </button>

        <img id="outputImage" style={{ display: "none" }} />

        <button id="downloadBtn" style={{ display: "none" }}>
          Download
        </button>
      </div>

    </div>
  );
}
