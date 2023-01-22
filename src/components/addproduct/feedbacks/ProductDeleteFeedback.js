


import React from 'react'



const ProductDeleteFeedback = ({style,deleted}) => {


  const closed=()=>{
    deleted();
}
  return (
   <>
   
   <div class={`${style.delete_confirmation_page}`}>
                    <div class={`${style.delete_confirmation_box}`}>
                        <p>Bu ürünü silmek istediğinize emin misiniz?</p>
                        <div class={`${style.confirm_buttons}`}>
                            <button class={`${style.confirm_button} ${style.yes}`}>EVET</button>
                            <button class={`${style.confirm_button} ${style.no}`}  onClick={closed}>HAYIR</button>
                        </div>
                    </div>
                </div>
   </>
  )
}

export default ProductDeleteFeedback