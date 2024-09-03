import "./Baustein.css";
import React, {useState} from "react";

function Baustein() {
    const [clicked, setClicked]= useState(true);
    return (
        <div className="box" onClick={(e)=>setClicked(clicked=> !clicked)}>
            <div className="header">Lorem ipsum</div>
            {clicked ? 
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Curabitur libero lectus, vehicula a metus at, varius pellentesque diam.
                  Praesent dapibus tortor quis mollis dapibus. Nunc porta elit nec suscipit dignissim. 
                  Cras sed ipsum aliquam eros ornare venenatis a et est. Vestibulum lacinia mattis 
                  erat ac sagittis. Donec bibendum massa nec elit rhoncus hendrerit. Vestibulum 
                  rutrum massa sed leo molestie lacinia. Morbi egestas sit amet justo sit amet convallis.
                  In euismod pharetra ligula, eu dapibus eros fringilla ut</p> : '' }
        </div>
    )
}

export default Baustein;
