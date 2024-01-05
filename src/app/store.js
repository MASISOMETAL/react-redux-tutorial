import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/slices/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
})