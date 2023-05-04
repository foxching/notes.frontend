import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NoteState {
  notes: any[];
}

const initialState: NoteState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      return { ...state, notes: [...action.payload] };
    },
    deleteNote: (state, action) => {
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };
    },
    newNote: (state, action) => {
      return { ...state, notes: [...state.notes, action.payload] };
    },
    editNote: (state, action) => {
      let notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return { ...state, notes: [...notes] };
    },
  },
});

export const { setNotes, deleteNote, newNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;
