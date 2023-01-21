



import React from 'react'

const OrderItem = ({style,order,changeConfirm}) => {

    const setConfirm=()=>{
        changeConfirm();
    }

  return (
    <>

                        <tr >
                            <td>Mustafa Albayram</td>
                            <td>Kolye</td>
                            <td>3</td>
                            <td>Menemen/İzmir</td>
                            <td>12.01.2023</td>
                            <td><button className={style.order_confirmation_button} onClick={setConfirm}>SİPARİŞ ONAYLA</button></td>
                        </tr>
    
    </>
  )
}

export default OrderItem