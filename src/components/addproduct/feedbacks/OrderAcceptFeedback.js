

import React from 'react'

const OrderAcceptFeedback = ({style,changeConfirmFalse,changeTrueconfirm}) => {



    const setConfirmFalse=()=>{
        changeConfirmFalse();
    }
  return (
    <>
    <div className={`${style.order_confirmation_frame}`} onClick={setConfirmFalse}>
                    <div className={style.order_confirmation_box} onClick={()=>changeTrueconfirm()}>
                        <p>Siparişi onaylamak istediğinize emin misiniz ?</p>
                        <div className={style.confirm_buttons}>
                            <button className={`${style.confirm_button} ${style.yesOrder}`}>EVET</button>
                            <button className={`${style.confirm_button} ${style.noOrder}`} onClick={setConfirmFalse}>HAYIR</button>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default OrderAcceptFeedback