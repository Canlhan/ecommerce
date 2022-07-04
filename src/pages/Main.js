import React, { Fragment } from 'react'
import style from '../styles/Main.module.css'
import world from '../assets/images/world.jpg'
import shop from '../assets/videos/shopping.mp4'
import Header from '../components/Header'

import {Link} from 'react-router-dom'
const Main = () => {

    return (
        
          <Fragment>
                <div className={style.header}>
                    <div className={style.container}>
                            
                        <div className={style.row}>
                            <div className={style.col_2}>
                                <h1>Sen de al !  <span> Sen de kazan !  </span> </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos exercitationem quaerat, quo quae illum dolores! </p>
                              <Link  className={style.btn} to="/start"> Hemen Başla </Link>  
                            </div>
                            <div className={style.col_2}>
                                <div className={style.box}>


                                    <video src={shop}> </video>
                                    <img src={world}/>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </Fragment>
                
            
       
    )
}

export default Main;