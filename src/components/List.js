import React, { useEffect, useState } from "react";

import Baustein from "./Baustein";

function List({ data }) {
//   const [clicked, setClicked] = useState(false); //clicking on the text row
  const [updData, setUpdData] = useState([]); //array with new fields
  const [filteredItem, setFilteredItem] = useState({})
  const generateUniqueId = require("generate-unique-id");

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

  function clickRowHandler(id) {
    const current = updData.filter((item)=>{ return (item.id === id) ? item.toggle = !item.toggle : item.toggle} );
    //console.log(current)
    setFilteredItem(current);
  }





  return (
    <div>
      {updData.map((dataItem) => (
        <Baustein
          dataItem={dataItem}
          clickRowHandler={clickRowHandler}
        />
      ))}
    </div>
  );
}

export default List;
