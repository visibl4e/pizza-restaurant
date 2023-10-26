import React, { useRef, useState } from "react";
import { FormGroup } from "./FormGroup";
import { Form, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
export function ResetPassword() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState("");

  const emailRef = useRef();
  const { resetPasswordFn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPasswordFn(emailRef.current.value);
      setResetPassword("Check your email!");
    } catch {
      setError("Failed to reset the password");
    }

    setLoading(false);
  }
  return (
    <>
      <div className="bodyBackground">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <Form className="form" onSubmit={handleSubmit}>
        <h2 className="text">Password reset </h2>
        {resetPassword && (
          <div className="successSignup">
            {resetPassword}
            <span>
              <IoCheckmarkDoneCircleOutline />
            </span>
          </div>
        )}
        {error && <div className="error">{error}</div>}
        <FormGroup id="email">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="email" ref={emailRef} />
        </FormGroup>

        <button disabled={loading} className="btnAuth" type="submit">
          Send email
        </button>
        <div className="authLinks">
          <Link className="returnLink" to="/">
            Go back
          </Link>
          <span className="authText">
            Continue to
            <Link className="returnLink" to="/signIn">
              Sign-in
            </Link>
          </span>
        </div>
      </Form>
    </>
  );
}
