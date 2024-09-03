import Baustein from "./Baustein";

function List({data}) {



    return (
        <div>
             {data.map((dataItem) => <Baustein dataItem={dataItem} />)}
           
        </div>
    )
}

export default List;
