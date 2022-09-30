import { createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(state, action);
      },
    },
  },
});

export const { addContact } = contacts.actions;
export const contactReducer = contacts.reducer;
