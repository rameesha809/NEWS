import { createSlice } from '@reduxjs/toolkit';

const laterSlice = createSlice({
  name: 'later',
  initialState: [],
  reducers: {
    addLater: (state, action) => {
      state.push(action.payload);
    },
    delLater:(state, action) =>{
        const index = action.payload;
        state.splice(index,1)
    },
  },
});

export const { addLater, delLater } = laterSlice.actions;
export default laterSlice.reducer;