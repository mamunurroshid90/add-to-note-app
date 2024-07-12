import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/noteSlice";
import Update from "../components/menubar/Update";

const Notes = () => {
  const { notes } = useSelector((state) => state.note);
  const initialNotes = 4;
  const [next, setNext] = useState(initialNotes);
  const [visible, setVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedId, setEditedId] = useState();

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleLoadMore = () => {
    setNext((prev) => prev + 4);
  };

  const handleUpdate = (note) => {
    setVisible(note);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
    setEditedId(note.id);
  };

  if (visible) {
    return (
      <Update
        setVisible={setVisible}
        editedTitle={editedTitle}
        editedDescription={editedDescription}
        editedId={editedId}
        setEditedTitle={setEditedTitle}
        setEditedDescription={setEditedDescription}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <div className=" container px-5 grid grid-cols-4 gap-5 mt-5">
        {notes?.slice(0, next).map((note) => (
          <div
            className=" border border-green-700 px-5 py-3 rounded"
            key={note.id}
          >
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <span className=" text-sm text-slate-500 font-mono">
              {formatDistance(note.createAt, new Date(), { addSuffix: true })}
            </span>
            <div className=" flex justify-end gap-3">
              <button
                onClick={() => handleDelete(note.id)}
                className=" px-4 py-1 text-base text-white font-medium rounded bg-red-500"
              >
                delete
              </button>
              <button
                onClick={() => handleUpdate(note)}
                className=" px-4 py-1 text-base text-white font-medium rounded bg-black"
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
      {notes.length > next && (
        <div className=" text-center mt-4">
          <button
            onClick={handleLoadMore}
            className=" text-center px-4 py-1 font-medium text-base text-white bg-blue-500 rounded"
          >
            see more
          </button>
        </div>
      )}
    </>
  );
};

export default Notes;
