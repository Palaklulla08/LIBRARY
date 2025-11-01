import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
const store = configureStore({ reducer: { books: booksReducer } })
store.subscribe(()=>{ try{ localStorage.setItem('lv_books', JSON.stringify(store.getState().books.list)) }catch(e){} })
export default store