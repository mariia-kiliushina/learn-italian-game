import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import randomWords from 'random-words'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'

export const fetchCards = createAsyncThunk('fetchCards', async (thunkAPI) => {
  const response = await fetch('/api/italianWords', {
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => error.message)

  return response.map((word) => ({
    ...word,
    wrongAnswer: randomWords(1),
  }))
})
export const postScoreToServer = createAsyncThunk(
  'postScoreToServer',
  async (userScore, thunkAPI) => {
    debugger
    const response = await fetch('/api/userScore', {
      body: JSON.stringify([userScore]),
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(console.log)
    return response
  },
)

const initialState = {
  userName: '',
  userScore: 0,
  cards: [],
  shownCardsIds: [],
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
    setScore: (state) => {
      state.userScore += 1
    },
    setShownCardsIds: (state, action) => {
      state.shownCardsIds.push(action.payload)
    },
    nullify: (state) => {
      state.shownCardsIds = []
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
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
      .addCase(postScoreToServer.fulfilled, (state, action) => {
        state.userScore = action.payload
      })
  },
})

export const { setName, setScore, setShownCardsIds, nullify } = slicerReducer.actions
export default slicerReducer.reducer
