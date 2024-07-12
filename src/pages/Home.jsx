import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToNote } from "../features/noteSlice";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSaveNotes = (e) => {
    e.preventDefault();
    if ((title !== "") & (description !== "")) {
      const newNotes = {
        id: Date.now().toString(32),
        title,
        description,
        createAt: new Date().toString(),
      };
      setTitle("");
      setDescription("");
      dispatch(addToNote(newNotes));
      toast.success("Successfully added!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Please fill up empty field!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // console.log(Date.now().toString(32));

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className=" flex justify-center items-center box-border">
        <div className=" bg-slate-200 mt-20 w-[450px] px-5 py-3 rounded">
          <h2 className=" text-center text-4xl font-serif font-semibold mb-3">
            Add to Notes
          </h2>
          <form className=" flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              className=" p-2 rounded outline-none"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              maxLength={400}
              rows={5}
              placeholder="Description"
              className=" p-2 rounded outline-none resize-none"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <button
              onClick={handleSaveNotes}
              className=" bg-black text-base text-white font-serif font-semibold capitalize px-5 py-2 rounded"
            >
              save notes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
