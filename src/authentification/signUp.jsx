import React, { useRef, useState } from "react";
import { FormGroup } from "./FormGroup";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
export function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signupFn, currentUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setSuccessMessage("");
      setError("");
      setLoading(true);
      await signupFn(emailRef.current.value, passwordRef.current.value);
      setSuccessMessage("Your account have been successfully created!");
    } catch {
      setError("Failed to sign-up");
    }

    passwordRef.current.value = "";
    passwordConfirmRef.current.value = "";
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
        <h2 className="text">Sign-up</h2>
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
        <FormGroup id="password-confirm">
          <label className="label" htmlFor="password">
            Password Confirmation
          </label>
          <input className="input" type="password" ref={passwordConfirmRef} />
        </FormGroup>
        <button disabled={loading} className="btnAuth" type="submit">
          Sign Up
        </button>
        <div className="authLinks">
          <Link className="returnLink" to="/">
            Go back
          </Link>
          <span className="authText">
            Have an account?
            <Link className="returnLink" to="/signIn">
              Sign-in
            </Link>
          </span>
        </div>
      </Form>
    </>
  );
}
