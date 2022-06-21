import * as React from "react";
<<<<<<< HEAD
import "./modal.css"



export const Modal = ( {closeModal,modal}) => {
=======
import './modal.css';
import axios from "axios";
import { useState } from "react";

function refreshPage() {
  window.location.reload(false);
}

export const Modal = ({ closeModal, post }) => {

  const [input, setInput] = useState('')

  function postUpdate(post) {
    try {
      axios.put(`http://localhost:8800/api/posts/${post._id}`, { desc: input })
    } catch (err) { }
  }

>>>>>>> 9b9b6b5b25b5eb869e9222f005f1ce91dc22a33f
  return (
    <div className="modal">
      <div className="modal-header">
        <h2
          onClick={() => {
            closeModal(!modal);
          }}
        >
          X
        </h2>
      </div>
      <div className="modal-body">
        <label forName="postContent">Edit : </label>
        <input type="text"
          defaultValue={post.desc}
          className="postContent"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              closeModal(false);
              postUpdate(post);
              refreshPage()
            }
          }
          }
        ></input>
        <input type="submit" className="" onClick={() => {
          closeModal(false);
          postUpdate(post);
          refreshPage()
        }} ></input>
      </div>
    </div>
  );
};
