import React from "react";

export function FormGroup({ errorMessage = "", children }) {
  return (
    <div className={`formGroup ${errorMessage.length > 0 ? "errorMsg" : ""}`}>
      {children}
      {errorMessage.length > 0 && <div className="msg">{errorMessage}</div>}
    </div>
  );
}
