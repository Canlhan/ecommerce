import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Modal.module.css';

import foto from './indir.jpg'
const Modal = ({ isOpen, onClose }) => {

  const[predictPrice,setPredictPrice]=useState(0)
  const[currentPrice,setCurrentPrice]=useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tahmin');
        setPredictPrice(response.data.tahmin);
        setCurrentPrice(response.data.current);
        console.log(predictPrice)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={`${style.modal} ${isOpen ? style.open : ''}`}>
      <div className={style.modalContent}>
        <div className={style.imagePlaceholder}>

            <img src={foto}/>
        </div>
        <div className={style.textPlaceholder}>

              <p>Güncel fiyat: {currentPrice}TL</p>
        <p>30 gün sonraki tahmini fiyat: {predictPrice} TL</p>
        </div>
      </div>
      <button className={style.closeButton} onClick={onClose}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default Modal;
