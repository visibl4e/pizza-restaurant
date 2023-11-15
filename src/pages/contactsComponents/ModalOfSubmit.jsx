import React from "react";

export function ModalOfSubmit({ active, setActive }) {
  return (
    <>
      {active && (
        <div className="overlay " onClick={() => setActive(false)}>
          <div
            className={`modalContainer ${active ? "openModalWindow" : ""} `}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="https://static-00.iconduck.com/assets.00/process-completed-symbolic-icon-2048x2048-baquwdk1.png"
              alt="completed"
            />
            <h2>Thank You!</h2>
            <p>Your details has been successfully submitted.</p>
            <button onClick={() => setActive(false)}>Ok</button>{" "}
          </div>
        </div>
      )}
    </>
  );
}
