import { yupResolver } from "@hookform/resolvers/yup";
import { MailCircleIcon, NoTick, Tick } from "assets";
import { AuthContainer, Button, Input } from "components";
import { checkPassword } from "helpers";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./styles.module.scss";

export interface ResetData {
  password: string;
  confirmPassword: string;
}

const initCreateData: ResetData = {
  password: "",
  confirmPassword: ""
};

interface ResetPasswordProps {
  reset: (data: ResetData) => void;
  login: () => void;
}

const resetPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required("Required")
      .min(8, "Password should be at least 8 characters long")
      .matches(/[A-Z]/, "Password should contain an uppercase character")
      .matches(/[a-z]/, "Password should contain an lowercase character")
      .matches(/[0-9]/, "Password should contain at least one number"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .min(8, "Password should be at least 8 characters long")
      .matches(/[A-Z]/, "Password should contain an uppercase character")
      .matches(/[a-z]/, "Password should contain an lowercase character")
      .matches(/[0-9]/, "Password should contain at least one number")
      .required("Required")
  })
  .required();

const ResetPasswordUI: React.FC<ResetPasswordProps> = ({ login, reset }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ResetData>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: initCreateData
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit: SubmitHandler<ResetData> = (data) => {
    reset(data);
  };
  return (
    <AuthContainer
      heading="Set a new password"
      text="Your new password must be different from your previously used passwords"
      type="center"
      Icon={MailCircleIcon}
    >
      <form>
        <Input
          label="Password"
          placeholder="********"
          type="password"
          className={styles.input}
          required
          validatorMessage={errors.password?.message}
          name="password"
          register={register}
          parentClassName={styles.inputWrap}
          value={watch("password")}
        />

        <Input
          label="Confirm password"
          placeholder="********"
          type="password"
          className={styles.input}
          required
          validatorMessage={errors.confirmPassword?.message}
          name="confirmPassword"
          register={register}
          parentClassName={styles.inputWrap}
          value={watch("confirmPassword")}
        />

        <section className={styles.left}>
          <div className={styles.checkboxContainer}>
            {checkPassword(password, confirmPassword).length ? <Tick /> : <NoTick />}
            <span>8 character or longer</span>
          </div>
          <div className={styles.checkboxContainer}>
            {checkPassword(password, confirmPassword).case ? <Tick /> : <NoTick />}
            <span>Both upper and lower case letters</span>
          </div>
          <div className={styles.checkboxContainer}>
            {checkPassword(password, confirmPassword).numberAndSymbol ? <Tick /> : <NoTick />}
            <span>At least one number and symbol</span>
          </div>
        </section>

        <Button type="secondary" onClick={handleSubmit(onSubmit)} className={styles.submitBtn}>
          Reset Password
        </Button>
        <Button type="secondary" onClick={login} className={styles.backBtn}>
          <Tick />
          Back to login
        </Button>
      </form>
    </AuthContainer>
  );
};

export { ResetPasswordUI };
