import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './DataUpdate.jsx';

const StudentData = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default StudentData;
