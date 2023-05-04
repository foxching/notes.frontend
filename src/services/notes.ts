import axios from "axios";
import { AppDispatch } from "../app/store";
import notesSlice, {
  setNotes,
  deleteNote,
  newNote,
  editNote,
} from "../app/notesSlice";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001/notes",
});

export const GetNotes = async (dispatch: AppDispatch) => {
  try {
    // api call
    const notes = [
      { id: 1, value: "Cook food" },
      { id: 2, value: "Play games" },
      { id: 3, value: "Wash clothes" },
    ];
    dispatch(setNotes(notes));
  } catch {
    console.log("Error!");
  }
};

export const DeleteNote = async (dispatch: AppDispatch, noteId: number) => {
  try {
    // api call
    dispatch(deleteNote(noteId));
  } catch {
    console.log("Error!");
  }
};

export const NewNote = async (dispatch: AppDispatch, note: any) => {
  try {
    // api call
    const newNoteVal = { id: Math.random(), value: note };
    dispatch(newNote(newNoteVal));
  } catch {
    console.log("Error!");
  }
};

export const EditNote = async (dispatch: AppDispatch, note: any) => {
  try {
    // api call
    // const editNoteVal = { id: note.id, value: note.value };
    console.log(note)
    dispatch(editNote(note));
  } catch {
    console.log("Error!");
  }
};
