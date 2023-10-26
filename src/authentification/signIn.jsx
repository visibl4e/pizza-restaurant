import React, { useRef, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { FormGroup } from "./FormGroup";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigateTo = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signinFn, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSuccessMessage("");
      setError("");
      setLoading(true);
      await signinFn(emailRef.current.value, passwordRef.current.value);
      setSuccessMessage("You are successfully sign-in!");
    } catch {
      setError("Failed to sign-in");
    }
    setTimeout(() => {
      navigateTo("/home");
    }, 2000);
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
        <h2 className="text">Sign-in</h2>
        {successMessage && (
          <div className="successSignup">
            {successMessage}
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
        <FormGroup id="password">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input className="input" type="password" ref={passwordRef} required />
        </FormGroup>

        <button disabled={loading} className="btnAuth" type="submit">
          Sign In
        </button>

        <Link to="/resetPassword" className="resetLink">
          Forgot password?
        </Link>

        <div className="authLinks">
          <Link className="returnLink" to="/">
            Go back
          </Link>
          <span className="authText">
            Need an account?
            <Link className="returnLink" to="/signUp">
              Sign-up
            </Link>
          </span>
        </div>
      </Form>
    </>
  );
}
