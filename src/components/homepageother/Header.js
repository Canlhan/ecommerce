import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import style from './Header.module.css'

const Header = () => {

  return (
   <Fragment>
       <header>
        <div>
            <h2>End of Season Sale</h2>
            <p>Pieces from $50!</p>
            <Link to='/shop'> <input type="button" value="Shop Now"/>  </Link>
        </div>
    </header>
   </Fragment>
  )
}

export default Header