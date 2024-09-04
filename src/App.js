import React, { useState } from "react";
import List from './components/List';
import './App.css';

function App() {
  


  const data =[
    {title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit nisl vitae magna venenatis venenatis. Quisque iaculis placerat massa, at facilisis diam porta fermentum. Pellentesque diam libero, lacinia id suscipit nec, efficitur a nibh. Nullam rhoncus ligula quis elit ultricies, ac feugiat elit dapibus. Nam aliquet risus vitae elementum convallis. "
    },
    {title:"Etiam sed porttitor magna.", 
        content:"Etiam sed porttitor magna. Ut accumsan blandit nunc, vitae aliquet massa dictum ut. Duis et scelerisque nunc. Nam eros risus, finibus in dictum ut, vulputate interdum enim. Fusce risus mauris, viverra nec feugiat imperdiet, pulvinar id enim. Etiam id aliquet ipsum, quis consectetur odio."
    },
    {title:"Ut ipsum nisl", 
        content:"Ut ipsum nisl, viverra quis facilisis rhoncus, aliquet nec odio. Nunc ligula elit, interdum vel mollis eget, auctor sed nulla. Suspendisse vitae iaculis purus. Sed diam leo, vehicula sollicitudin odio vel, condimentum cursus massa. Mauris nulla orci, luctus eget condimentum accumsan, ornare vitae tellus."
    },
    {title:"Donec iaculis hendrerit magna",
        content:"Donec iaculis hendrerit magna, in bibendum felis hendrerit in. Aliquam ut ornare leo, non feugiat ex. Sed ut bibendum ligula. Etiam hendrerit facilisis suscipit. Duis justo diam, sagittis quis augue at, fermentum luctus mi. Sed venenatis convallis dui, facilisis venenatis diam vestibulum et."
    }
    
]


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Büro Assistent
        </p>
      </header>
   
      <List data={data} />
    </div>
  );
}

export default App;
