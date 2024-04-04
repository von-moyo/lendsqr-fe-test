import { SignupUI } from "features";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {

  //   createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   console.log('Signed up user:', user);
  //   // ...
  // })
  // .catch((error: any) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.error('Error signing up:', errorMessage, errorCode);
  //   // ..
  // });
  }


  return (
    <>
      <SignupUI
        submit={signup}
      />
    </>
  );
};

export { Signup };