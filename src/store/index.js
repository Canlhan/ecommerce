


import{ configureStore } from '@reduxjs/toolkit'

import chartReducer from './chart-slice'
const store=configureStore({
    reducer:{chart:chartReducer}
})

export default store;