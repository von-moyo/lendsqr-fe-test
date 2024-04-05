import { AuthContainer, Button, Input } from "components";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
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

const LoginUI: React.FC<LoginProps> = ({ submit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LoginDetails>({
    resolver: yupResolver(loginSchema),
    defaultValues: initLoginDetails,
  });

  const [boolean, setBoolean] = useState(true);
  const [type, setType] = useState("password");
  const showAction = () => {
    setBoolean(!boolean);
    boolean ? setType("email") : setType("password");
  };

  const onSubmit: SubmitHandler<LoginDetails> = (data) => {
    submit(data);
    console.log(data)
    reset();
  };

  return (
    <>
      <AuthContainer type="side" className={`${styles.center}`}>
        <div className={styles.header}>
          <h2>Welcome!</h2>
          <p data-testid="login">Enter details to login.</p>
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
            className={styles.password}
            show={boolean}
            showRequired={true}
            showAction={showAction}
          />

          <div className={`${styles.spread}`}>
            <Link
              to={Routes.forgotPassword}
              className={`${styles.blue} ${styles.spread__p}`}
            >
              FORGOT PASSWORD?
            </Link>
          </div>
          <Button
            type="primary"
            onClick={handleSubmit(onSubmit)}
            className={`${styles.btn}`}
          >
            LOG IN
          </Button>
          <p className={`${styles.foot}`}>
            Don't have an account?{" "}
            <Link to={`${Routes.signup}`} className={`${styles.blue}`}>
              Sign up
            </Link>
          </p>
        </form>
      </AuthContainer>
    </>
  );
};
export { LoginUI };
