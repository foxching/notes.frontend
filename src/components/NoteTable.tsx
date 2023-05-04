import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetNotes, DeleteNote } from "../services/notes";
import { Button } from "react-bootstrap";
import { RootState } from "../app/store";
import { EditNoteModal } from "./NoteModal";

export const NoteTable = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    GetNotes(dispatch);
  }, []);

  return (
    <table className="table table-dark">
      <tbody>
        {notes.map((n) => (
          <tr key={n.id}>
            <td style={{ width: "3rem" }}>
              <EditNoteModal note={n} />
            </td>
            <td style={{ width: "3rem" }}>
              <Button
                className="btn btn-danger"
                onClick={() => DeleteNote(dispatch, n.id)}
              >
                Delete
              </Button>
            </td>
            <td style={{ textAlign: "left" }}>{n.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default NoteTable;
