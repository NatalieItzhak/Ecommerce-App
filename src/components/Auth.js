import React, { useState, useEffect } from "react";
import fire from "./fire";

const Auth = () => {
  
  const [setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [emailerr, setEmailErr] = useState('');
  const [passworderr, setPasswordErr] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const login = () => {
    clearErr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
            setEmailErr(err.message);
            break;
          case "auth/wrong.password":
            setPasswordErr(err.message)
            break;
            default:

        }
      });
  };

  const handleSignup = () => {
    clearErr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break;
          case "auth/weak-password":
            setPasswordErr(err.message)
            break;
            default:

        }
      });
  }
  const clearInputs = () => {
    setEmail('');
    setPassord('');
  }

  const clearErr = () => {
    setEmailErr('');
    setPasswordErr('');
  }

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if (user) {
          clearInputs();
          setUser(user);
        }
      });
    }
    authListener();
  }, [setUser]);

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email:</label>
        <input
          type="text"
          outFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMsg">{emailerr}</p>
        <label>Password:</label>
        <input
          type="password"
          outFocus
          required
          value={password}
          onChange={(e) => setPassord(e.target.value)}
        ></input>
        <p className="errorMsg">{passworderr}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={login}>Sign In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
