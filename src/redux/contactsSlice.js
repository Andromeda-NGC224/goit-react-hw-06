import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name: name,
            number: number,
            id: crypto.randomUUID(),
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
