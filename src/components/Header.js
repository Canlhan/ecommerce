import React, { Fragment } from 'react'
import style from '../components/styles/Header.module.css'
const Header = () => {


    return (

        <Fragment>
            
            <div className={style.navbar}>
                <div className={style.logo}>
                    <img src="logo.png" alt=" yok" />
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
        </Fragment>

    )
}

export default Header