import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNotes } from "../../features/noteSlice";

const Update = ({
  setVisible,
  editedTitle,
  editedDescription,
  editedId,
  setEditedTitle,
  setEditedDescription,
}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    const updateValues = {
      id: editedId,
      title: editedTitle,
      description: editedDescription,
      createAt: new Date().toString(),
    };
    dispatch(updateNotes(updateValues));
    setVisible(false);
  };
  return (
    <>
      <div className=" w-full h-screen bg-[rgba(255, 255, 255, 0.8)] fixed top-0 left-0 flex justify-center items-center">
        <div className="">
          <div className=" bg-slate-200 mt-20 w-[450px] px-5 py-3 rounded">
            <div className=" relative">
              <h2 className=" text-center text-4xl font-serif font-semibold mb-3">
                update your Notes
              </h2>
              <div
                onClick={() => setVisible(false)}
                className=" absolute top-0 right-0 bg-red-600 w-6 h-6 rounded-full text-lg text-white font-bold flex justify-center items-center cursor-pointer hover:bg-red-900"
              >
                <RxCross2 />
              </div>
            </div>
            <form className=" flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                className=" p-2 rounded outline-none"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                maxLength={400}
                rows={5}
                placeholder="Description"
                className=" p-2 rounded outline-none resize-none"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
              <button
                onClick={handleEdit}
                className=" bg-black text-base text-white font-serif font-semibold capitalize px-5 py-2 rounded"
              >
                update notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
