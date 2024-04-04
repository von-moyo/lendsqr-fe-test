import { AuthContainer, Button, Input } from "components";
import styles from "./styles.module.scss";
import { LogoWithText } from "assets";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "router/routes";
import { useState } from "react";

interface LoginDetails {
  email: string;
  password: string;
}

const initLoginDetails: LoginDetails = {
  email: "",
  password: "",
};

const loginSchema = yup
  .object({
    email: yup.string().email("Enter a valid email").required("Required"),
    password: yup.string().required("Required"),
  })
  .required();

interface LoginProps {
  submit: (data: LoginDetails) => void;
}

const SignupUI: React.FC<LoginProps> = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LoginDetails>({
    resolver: yupResolver(loginSchema),
    defaultValues: initLoginDetails,
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginDetails> = (data) => {
    submit(data);
    reset()
    navigate(Routes.users)
  };

  const [boolean, setBoolean] = useState(true);
  const [type, setType] = useState("password")
  const showAction = () => {
    setBoolean(!boolean);
    boolean ? setType("email") : setType("password")
  };

  return (
    <>
      <AuthContainer type="side" className={`${styles.center}`}>
        <div className={styles.header}>
          <h2>Welcome!</h2>
          <p>Enter details to signup.</p>
        </div>
        <form>
          <Input
            placeholder="Email"
            type="email"
            required
            validatorMessage={errors.email?.message}
            name="email"
            register={register}
            value={watch("email")}
          />
          <Input
            placeholder="Password"
            type={type}
            required
            validatorMessage={errors.password?.message}
            name="password"
            register={register}
            value={watch("password")}
            show={boolean}
            showRequired={true}
            showAction={showAction}
          />
          <Button
            type="primary"
            onClick={handleSubmit(onSubmit)}
            className={`${styles.btn}`}
          >
            SIGN UP
          </Button>
          <p className={`${styles.foot}`}>
            Already have an account?{" "}
            <Link to={`${Routes.home}`} className={`${styles.blue}`}>
              Log in
            </Link>
          </p>
        </form>
      </AuthContainer>
    </>
  );
};
export { SignupUI };
