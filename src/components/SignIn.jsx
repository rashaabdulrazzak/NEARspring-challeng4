import React from "react";
import cover from "../img/cover.png";
export default function SignIn({ signIn }) {
  return (
    <>
      <img src={cover} alt="cover" style={{ height: "300px" }} />
      <p>Go ahead and sign in to try it out!</p>
      <button onClick={signIn}> Sign In </button>
    </>
  );
}
