import { LoginUI } from "features";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {}

  return (
    <>
      <LoginUI
        submit={login}
      />
    </>
  );
};

export { Login };