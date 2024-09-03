import React, { useState } from "react";

import Baustein from "./Baustein";

function List({data}) {

    const [clicked, setClicked] = useState(true);

    function clickRowHandler(e){
        setClicked((clicked) => !clicked)
    }
    return (
        <div>
             {data.map((dataItem) => <Baustein dataItem={dataItem} clickRowHandler={clickRowHandler} clicked={clicked}/>)}
           
        </div>
    )
}

export default List;
