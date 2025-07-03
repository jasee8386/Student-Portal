import { createSlice } from '@reduxjs/toolkit';

const DataUpdate = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
     setStudents: (state, action) => action.payload,
    addStudent: (state, action) => { state.push(action.payload); },
    editStudent: (state, action) => {
      const index = state.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      return state.filter(s => s.id !== action.payload);
    },
  },
});

export const {
  setStudents,
  addStudent,
  editStudent,
  deleteStudent
} = DataUpdate.actions;

export default DataUpdate.reducer;
