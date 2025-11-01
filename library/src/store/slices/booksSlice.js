import { createSlice, nanoid } from '@reduxjs/toolkit'
import initial from '../../data/books'
let persisted = []
try{ const raw = localStorage.getItem('lv_books'); if(raw) persisted = JSON.parse(raw) }catch(e){}
const books = persisted.length ? persisted : initial
const slice = createSlice({
  name: 'books',
  initialState: { list: books },
  reducers: {
    addBook: {
      reducer(state, action) { state.list.unshift(action.payload) },
      prepare(book) { return { payload: { id: nanoid(), favorite: false, ...book } } }
    },
    toggleFavorite(state, action) {
      const b = state.list.find(x => x.id === action.payload)
      if (b) b.favorite = !b.favorite
    }
  }
})
export const { addBook, toggleFavorite } = slice.actions
export default slice.reducer
