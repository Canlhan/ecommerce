import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Resizable } from 'react-resizable';
import { Provider } from 'react-redux';
import store from './store/index'
import { AuthContextProvider } from './context/customerauth';
import CustomerContext, { CustomerContextProvider } from './context/customerContext';
import { VendorContextProvider } from './context/vendorContext.tsx';
import { ChartProductsContextProvider } from './context/ChartProductContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <AuthContextProvider>
  <Provider store={store}>
    
  

  <CustomerContextProvider>

 <VendorContextProvider>

      <ChartProductsContextProvider>

      
      <BrowserRouter>
           <App />
      </BrowserRouter>
     
       
      </ChartProductsContextProvider>

  </VendorContextProvider>
  </CustomerContextProvider>
  
  </Provider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
