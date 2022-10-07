import React, { Fragment } from 'react'

const Shoesize = (props) => {

    const shoesizes=props.shoesize;
    
  return (

    <Fragment>
          
              {shoesizes.map((size,index)=>(<div key={index} className="shoe-sizes-item">{size.value}</div>))}
                    
            
    </Fragment>
  )
}

export default Shoesize