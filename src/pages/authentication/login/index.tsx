import { LoginUI } from "features";
import { useNavigate } from "react-router-dom";
import { Routes } from "router/routes";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate(Routes.users)
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