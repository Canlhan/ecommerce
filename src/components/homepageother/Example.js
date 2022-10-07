import React from 'react';
import { Resizable } from 'react-resizable';

// ...
const Example =()=> {
 


  // On top layout
  const  onResize = (event, {element, size, handle}) => {
      console.log("size:" +size.width);
    
  };

  
    return (
      <Resizable height={900} width={9000} onResize={onResize}>
        <div className="box" >
          <span>Contents</span>
        </div>
      </Resizable>
    );
  
}

export default Example;