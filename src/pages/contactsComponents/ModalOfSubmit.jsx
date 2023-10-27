import React, { useState } from "react";

export function ModalOfSubmit() {
  const [closeModal, setCloseModal] = useState(true);

  return (
    <>
      {closeModal && (
        <div className="overlay" onClick={() => setCloseModal(!closeModal)}>
          <div
            className={`modalContainer ${
              !closeModal ? "closeModalWindow" : ""
            }`}
          >
            <img
              src="https://static-00.iconduck.com/assets.00/process-completed-symbolic-icon-2048x2048-baquwdk1.png"
              alt="completed"
            />
            <h2>Thank You!</h2>
            <p>Your details has been successfully submitted. Thanks</p>
            <button onClick={() => setCloseModal(!closeModal)}>Ok</button>
          </div>
        </div>
      )}
    </>
  );
}
