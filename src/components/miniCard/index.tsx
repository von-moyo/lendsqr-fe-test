import styles from "./styles.module.scss";
interface MiniCardData {
  users: string;
  header: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const MiniCard: React.FC<MiniCardData> = ({ users, header, Icon }) => {
  return (
    <div className={styles.users}>
      <div
        className={`${styles.icon}
        ${
          header === "USERS"
            ? styles.userss
            : header === "ACTIVE USERS"
            ? styles.active
            : header === "USERS WITH LOANS"
            ? styles.loans
            : header === "USERS WITH SAVINGS"
            ? styles.savings
            : ""
        }
      `}
      >
        <Icon />
      </div>
      <p className={styles.usersHead}>{header}</p>
      <div className={styles.usersNumber}>{users}</div>
    </div>
  );
};

export { MiniCard };
