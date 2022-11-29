


import{ configureStore } from '@reduxjs/toolkit'

import chartReducer from './chart-slice'
import customerReducer from './customer-slice'
import categoryReducer from './category-slice'
const store=configureStore({
    reducer:{chart:chartReducer,customer:customerReducer,category:categoryReducer}
})

export default store;