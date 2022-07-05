import React, { Fragment } from 'react'
import style from '../styles/main/Main.module.css'
import world from '../assets/images/world.jpg'
import shop from '../assets/videos/shopping.mp4'
import Header from '../components/navbar/Header'

import {Link} from 'react-router-dom'
const Main = () => {

    return (
        
          <Fragment>
              <div className={style.backimg}>
                  <h1> EN YENİLER BURADA.</h1>
                <button>SHOP NOW</button>
              </div>
          </Fragment>
                
            
       
    )
}

export default Main;