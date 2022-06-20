import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import randomWords from 'random-words'

export const fetchCards = createAsyncThunk('fetchCards', async (thunkAPI) => {
  const response = await fetch(
    'https://raw.githubusercontent.com/mariia-kiliushina/learn-italian-data/master/data.json',
  ).then((response) => response.json())

  return response.map((word) => ({
    ...word,
    wrongAnswer: randomWords(1),
  }))
})

const initialState = {
  userName: '',
  cards: [],
  loading: false,
  error: '',
}

const slicerReducer = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload
        state.loading = false
      })
      .addCase(fetchCards.rejected, (state) => {
        state.error = error.message
        state.loading = false
      })
  },
})

export const { setName } = slicerReducer.actions
export default slicerReducer.reducer
