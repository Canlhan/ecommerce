


import React from 'react'

const VendorProductUpdate = ({style,updated,setYes}) => {

    
const closed=()=>{
    updated();
}

const setYess=()=>{
  setYes(true);
  
  updated();
}
  return (
    <>
    
    <div class={style.update_confirmation_page} >
                    <div class={style.update_confirmation_box}>
                        <p>Bu ürünü güncellemek istediğinize emin misiniz?</p>
                        <div class={style.confirm_buttons}>
                            <button class={`${style.confirm_button} ${style.yesUpdate}`} onClick={setYess}>EVET</button>
                            <button class={`${style.confirm_button} ${style.noUpdate}`} onClick={closed}>HAYIR</button>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default VendorProductUpdate