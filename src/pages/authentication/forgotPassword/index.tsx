import { ForgotPasswordUI,  } from "features";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const reset = () => {

  };

  const login = () => {
    navigate(Routes.home);
  };
  return (
    <>
      <ForgotPasswordUI login={login} recovery={reset} clear />
    </>
  );
};

export { ForgotPassword };