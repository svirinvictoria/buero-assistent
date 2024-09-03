import React from "react";
import "./Baustein.css";

function Baustein({ dataItem, clickRowHandler }) {
  return (
    <div className="box" onClick={(e) => clickRowHandler(dataItem.id)}>
      <div className="header">{dataItem.title}</div>
      {dataItem.toggle && <div className="text">{dataItem.content}</div>}
    </div>
  );
}

export default Baustein;
