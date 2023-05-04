import { useEffect, useState } from "react";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EditNote, NewNote } from "../services/notes";

export const NewNoteModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-success">
        New Note
      </Button>
      <NoteModal
        note={null}
        handleFormSubmit={NewNote}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

type EditNoteModalProps = {
  note: any;
};
export const EditNoteModal = ({ note }: EditNoteModalProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="btn btn-success btn-block">
        Edit 
      </Button>
      <NoteModal
        note={note}
        handleFormSubmit={EditNote}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

type NoteModalProps = {
  note: any;
  handleFormSubmit: any;
  show: any;
  handleClose: any;
};

const NoteModal = ({
  note,
  handleFormSubmit,
  show,
  handleClose,
}: NoteModalProps) => {
  const [modalNote, setModalNote] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if(note) setModalNote(note.value);
  }, [note]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(dispatch, modalNote);
        }}
      >
        <Modal.Body>
          <InputGroup>
            <FormControl
              value={modalNote === null ? "" : modalNote}
              onChange={(e) => setModalNote(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
