import React from 'react'
import style from './Main.module.css'
import world from '../assets/images/world.jpg'
import shop from '../assets/videos/shopping.mp4'
const Main = () => {

    return (
        <>
          
                <div className={style.header}>
                    <div className={style.container}>
                        <div className={style.navbar}>
                            <div className={style.logo}>
                                        <img src="logo.png" alt=" yok"/>
                            </div>
                            <nav>
                                <ul>
                                    <li><a >Home</a></li>
                                    <li><a >About</a></li>
                                    <li><a >Buy</a></li>
                                    <li><a >Contact</a></li>
                                </ul>
                            </nav>
                            <div >
                                <i className="fa-solid fa-question"></i>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.col_2}>
                                <h1>Sen de al !  <span> Sen de kazan !  </span> </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos exercitationem quaerat, quo quae illum dolores! </p>
                                <a href="#" className={style.btn}> Hemen Başla </a>
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
            
        </>
    )
}

export default Main;