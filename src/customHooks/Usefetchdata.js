import React, { useEffect, useState } from 'react'


const Usefetchdata=(url)=>{
    const [products,setProducts]=useState([]);

    useEffect(() => {
        // By moving this function inside the effect, we can clearly see the values it uses.
        async function fetchProduct() {
          const response = await fetch(url);
          const json = await response.json();
          console.log("fetch data "+JSON.stringify(json) )
          setProducts(json.data);
        }
    
        fetchProduct();
      }, [url]);
      
      

    return products;
}
export default Usefetchdata;