import * as React from "react";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { AuthContainer, Button, Input } from "components";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "router/routes";

export interface RecoveryData {
  email: string;
}

const initialValues: RecoveryData = {
  email: "",
};

export interface RecoveryModalProps {
  recovery: (data: RecoveryData) => void;
  login: () => void;
  clear: boolean;
}

const RecoverySchema = yup
  .object({
    email: yup.string().email("Enter a valid email").required("Required"),
  })
  .required();

const ForgotPasswordUI: React.FC<RecoveryModalProps> = ({
  recovery,
  login,
  clear,
}: RecoveryModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RecoveryData>({
    resolver: yupResolver(RecoverySchema),
    defaultValues: initialValues,
  });

  React.useEffect(() => {
    reset();
  }, [clear]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RecoveryData> = (data) => recovery(data);

  return (
    <>
      <AuthContainer type="side" className={`${styles.center}`}>
        <div className={styles.header}>
          <h2>Account Recovery</h2>
          <p>Forgot your password?</p>
        </div>
        <form>
          <Input
            placeholder="e.g. user@gmail.com"
            type="email"
            parentClassName={styles.input}
            required
            validatorMessage={errors.email?.message}
            name="email"
            register={register}
          />
          <p className={styles.info}>
            Enter your recovery email address with which you will recieve an OTP
          </p>
          <Button
            type="primary"
            onClick={handleSubmit(onSubmit)}
            className={`${styles.btn}`}
          >
            CONTINUE
          </Button>
          <p className={`${styles.foot}`}>
            Remember your password?{" "}
            <Link to={`${Routes.home}`} className={`${styles.blue}`}>
              Log in
            </Link>
          </p>
        </form>
      </AuthContainer>
    </>
  );
};

export { ForgotPasswordUI };
