import React, { useEffect, useState } from "react";

import Baustein from "./Baustein";

function List({ data }) {
  //   const [clicked, setClicked] = useState(false); //clicking on the text row
  const [updData, setUpdData] = useState([]); //array with new fields
  const [filteredItem, setFilteredItem] = useState({});
  const [changeToSingleMode, setChangeToSingleMode] = useState(false); //single mode or multi mode
  const generateUniqueId = require("generate-unique-id");

  //adding two new fields to data array arriving from the props
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  function fetchData() {
    const mutedList = data.map((item) => {
      return { ...item, id: generateUniqueId(), toggle: false };
    });
    setUpdData(mutedList);
  }
  //   console.log(updData);

  //enable multi mode
  //opening a row when clicked => filtering the updated data array
  function clickRowHandler(id) {
    const current = updData.filter((item) => {
      return item.id === id ? (item.toggle = !item.toggle) : item.toggle;
    });
    //console.log(current)
    setFilteredItem(current);
  }

  //enable single mode

  function clickSingleRowHandler(id) {
    const single = updData.filter((item) => {
      return item.toggle ? (item.toggle = !item.toggle) : item.toggle;
    });
    clickRowHandler(id);
    setFilteredItem(single);
    console.log("changing mode");
  }

  function chooseModeHandler(id) {
    if (changeToSingleMode) {
      clickSingleRowHandler(id);
    } else {
      clickRowHandler(id);
    }
  }

  return (
    <div>
      <button className="btn" onClick={(e) => setChangeToSingleMode(true)}>
        Change to Single Mode
      </button>
      <button className="btn" onClick={(e) => setChangeToSingleMode(false)}>
        Change to Multiple Mode
      </button>
      {updData.map((dataItem) => (
        <Baustein
          dataItem={dataItem}
          chooseModeHandler={chooseModeHandler}
          changeToSingleMode={changeToSingleMode}
        />
      ))}
    </div>
  );
}

export default List;
