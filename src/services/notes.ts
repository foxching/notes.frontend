import axios from "axios";
import { AppDispatch } from "../app/store";
import { setNotes, deleteNote, newNote, editNote } from "../app/notesSlice";
import { Note } from "../model/note";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7177/Notes",
});

export const GetNotes = async (dispatch: AppDispatch) => {
  try {
    const { data } = await axiosInstance.get("");
    dispatch(setNotes(data));
  } catch {
    console.log("Error!");
  }
};

export const DeleteNote = async (dispatch: AppDispatch, noteId: number) => {
  try {
    await axiosInstance.delete(`/${noteId}`);
    dispatch(deleteNote(noteId));
  } catch {
    console.log("Error!");
  }
};

export const NewNote = async (dispatch: AppDispatch, note: Note) => {
  try {
    const { data } = await axiosInstance.post("", note);
    dispatch(newNote(data));
  } catch {
    console.log("Error!");
  }
};

export const EditNote = async (dispatch: AppDispatch, note: Note) => {
  try {
    const { data } = await axiosInstance.put("", note);
    dispatch(editNote(data));
  } catch {
    console.log("Error!");
  }
};
