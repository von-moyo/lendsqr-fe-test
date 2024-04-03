import * as React from "react";
import styles from "./styles.module.scss";
import { LogoWithText, SignIn } from "assets";

interface AuthContainerProps {
  children: any;
  className?: string;
  type: "center" | "side";
  heading?: string;
  text?: string | any;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  children,
  className,
  type,
  heading,
  text,
  Icon,
}) => {
  return (
    <>
      {type === "side" ? (
        <main className={`${styles.authBg} ${styles.side}`}>
          <div className={`${styles.imageSection}`}>
            <div className={styles.im}>
              <LogoWithText className={styles.logo} />
              <SignIn className={styles.authImg} />
            </div>
          </div>
          <section className={`appContainer ${styles.container}`}>
            <section className={`${styles.contentSec} ${className}`}>
              {children}
            </section>
          </section>
        </main>
      ) : (
        <main className={`appContainer ${styles.center}`}>
          <section className={`${styles.container} ${className}`}>
            {Icon ? <Icon className={styles.icon} /> : ""}
            {heading ? <h1 className={styles.ttl}>{heading}</h1> : ""}
            {text ? <p className={styles.txt}>{text}</p> : ""}
            {children}
          </section>
        </main>
      )}
    </>
  );
};

export { AuthContainer };
