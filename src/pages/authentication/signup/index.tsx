import { SignupUI } from "features";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const signup = () => {}

  return (
    <>
      <SignupUI
        submit={signup}
      />
    </>
  );
};

export { Signup };