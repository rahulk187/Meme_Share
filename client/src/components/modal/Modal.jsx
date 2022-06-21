import * as React from "react";
import "./modal.css"



export const Modal = ( {closeModal,modal}) => {
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
        <h2>This is a modal</h2>
      </div>
    </div>
  );
};
