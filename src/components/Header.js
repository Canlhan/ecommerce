import React, { Fragment } from 'react'

import style from './Header.module.css'

const Header = () => {

  return (
   <Fragment>
       <header>
        <div>
            <h2>End of Season Sale</h2>
            <p>Pieces from $50!</p>
            <input type="button" value="Shop Now"/>
        </div>
    </header>
   </Fragment>
  )
}

export default Header