import { LoginUI } from "features";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("lendsqrAdminAccess", "0zglnvfjq9p55ijh2hlzxab5v2z1izq6r2l99rk1");
  }

  return (
    <>
      <LoginUI
        submit={login}
      />
    </>
  );
};

export { Login };