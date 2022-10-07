import React, { Fragment } from "react";

import style from './Introduction.module.css'
const Introduction = () => {

  return (
    <Fragment>
      <div className={style.introduction}>
        <div className={style.introduction_text}>
          <h2>Homegrown</h2>
          <p>
            We love all of our beautiful brands here at Hebe but there is a
            special place in our heart for the New Zealand brands. We have made
            it easy for you to find a little about each of these amazing brands.
            Head over to our Homegrown page where we give you a little insight
            into what makes each of these brands so special.
          </p>
          <button>Find out more</button>
        </div>
        <div className={style.introduction_picture}></div>
      </div>
    </Fragment>
  );
};

export default Introduction;
