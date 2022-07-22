import React, { useEffect, useState } from 'react'


const Usewindowsize = () => {
    const [size ,setSize]=useState([window.innerHeight,window.innerWidth]);
    const [isSmallerHun,setSmallerHun]=useState(true);
    
    useEffect(()=>{

        const resizeHandler=()=>{
            setSize([window.innerHeight,window.innerWidth]);
            if(window.innerWidth<1000){
                setSmallerHun(true)
                
            }
            
        }
        window.addEventListener('resize',resizeHandler)
    },[])
  
    return size;
   
  
}

export default Usewindowsize;