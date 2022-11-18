


import{ configureStore } from '@reduxjs/toolkit'

import chartReducer from './chart-slice'
import customerReducer from './customer-slice'
const store=configureStore({
    reducer:{chart:chartReducer,customer:customerReducer}
})

export default store;