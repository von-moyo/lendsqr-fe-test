import { ResetPasswordUI } from "features";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

const ResetPassword = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate(Routes.home);
  };
  const reset = () => {};

  return (
    <>
      <ResetPasswordUI login={login} reset={reset} />
    </>
  );
};

export { ResetPassword };
