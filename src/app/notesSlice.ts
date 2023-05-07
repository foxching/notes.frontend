import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../model/note";

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      return { ...state, notes: [...action.payload] };
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };
    },
    newNote: (state, action: PayloadAction<Note>) => {
      return { ...state, notes: [...state.notes, action.payload] };
    },
    editNote: (state, action: PayloadAction<Note>) => {
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
