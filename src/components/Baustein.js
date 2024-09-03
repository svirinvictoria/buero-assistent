import React, { useState } from "react";
import "./Baustein.css";

function Baustein({ dataItem, clickRowHandler, clicked }) {
  

  return (
    <div className="box" onClick={(e) => clickRowHandler()}>
        <div className="header">{dataItem.title}</div>
      {clicked?
       <div className="text">{dataItem.content}</div>
        : " "}
    </div>
  )
}

export default Baustein;
