import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './sliceReducer'

export const store = configureStore({
  reducer: {
    reducer,
  },
  middleware: [logger, thunk],
})
