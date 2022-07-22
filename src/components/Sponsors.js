import React, { Fragment } from "react";
import style from './Sponsor.module.css'
const Sponsors = () => {
  
  return (
    <Fragment>
      <div className={style.sponsors}>
        <div className={style.sponsor}>MARLE</div>
        <div className={style.sponsor} style={{ fontSize: "1.5rem" }}>
          ASSEMBLY LABEL
        </div>
        <div className={style.sponsor}>
          <span style={{ fontWeight: "900", fontSize: "5rem" }}>C&M</span>
          <br />
          CAMILLA AND MARC
        </div>
        <div className={style.sponsor}>REMAIN</div>
        <div className={style.sponsor}>
          STOLEN <br /> GIRLFRIENDS <br /> CLUB
        </div>
        <div className={style.sponsor}>COMMONERS</div>
        <div className={style.sponsor} style={{ fontWeight: 900 }}>
          twenty-seven <br /> names
        </div>
        <div className={style.sponsor}>Caitlin Crisp</div>
        <div
          className={style.sponsor}
          style={{ fontWeight: "900", fontSize: "4rem" }}
        >
          BLAK
        </div>
        <div
          className={style.sponsor}
          style={{ fontWeight: "900", fontSize: "4rem" }}
        >
          SABEN
        </div>
      </div>
    </Fragment>
  );
};

export default Sponsors;
