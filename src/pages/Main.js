
import React, { Fragment } from 'react'
import style from '../styles/main/Main.module.css'

import shop from '../assets/videos/shopping.mp4'
import Header from '../components/navbar/Header'

import {Link} from 'react-router-dom'
const Main = () => {

    const goToCategories=()=>{
        

    }

    return (
        
          <Fragment>
              
              <div className={style.main}>
                 <p > foto</p>
                 <h1>yazı</h1>
                 <p> foto üzerinde button show now buttonu</p>
                <button > <Link className='buraya da css classı eklenebiliyor ' to="/categories">shop now</Link></button>
                
                
              </div>
              <div  className={style.info}>
                 <p> aasaa  aasaa  aasaa  aasaa</p>
              </div>
              <div className={style.mostsell}>
                    en çok satılanlar
              </div>
              
             
              
              
          </Fragment>
                
            
       
    )
}

export default Main;