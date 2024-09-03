import "./Baustein.css";
import React, { useState } from "react";

function Baustein({ dataItem }) {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="box" onClick={(e) => setClicked((clicked) => !clicked)}>
        <div className="header">{dataItem.title}</div>
      {clicked?
       <div className="text">{dataItem.content}</div>
        : " "}
    </div>
  )
}

export default Baustein;
