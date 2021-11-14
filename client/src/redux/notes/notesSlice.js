import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [{ id: "1", text: "test1", color: "blue" }],
    filter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const selectFilteredNotes = (state) => {
  if (state.notes.filter === "") {
    return state.notes.items;
  }
  return state.notes.items.filter((item) =>
    item.text.toLowerCase().includes(state.notes.filter)
  );
};

export const { addNote, changeFilter, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
