import React from "react";
import "./Baustein.css";

function Baustein({ dataItem, chooseModeHandler,changeToSingleMode }) {
  return (
    <div className="box" onClick={(e) => chooseModeHandler(dataItem.id)}>
      <div className="header">{dataItem.title}</div>
      {dataItem.toggle && <div className="text">{dataItem.content}</div>}
    </div>
  );
}
// function Baustein({ dataItem, chooseModeHandler,changeToSingleMode }) {
//   return (
//     <div className="box" onClick={(e) => chooseModeHandler(dataItem.id)}>
//       <div className="header">{dataItem.title}</div>
//       {changeToSingleMode && <div className="text">{dataItem.content}</div>}
//     </div>
//   );
// }


export default Baustein;
