import {
  LogoWithText,
  placeholderAvatar,
  NotificationIcon,
  DropdownIcon,
  OrganizationIcon,
  DashboardIcon,
  UsersIcon,
  GuarantorsIcon,
  DecisionModelsIcon,
  SavingsIcon,
  LoanRequestIcon,
  LoanProductIcon,
  LoanIcon,
  WhitelistIcon,
  KarmaIcon,
  BusinessOrganizationIcon,
  SavingsProductsIcon,
  FeesChargesIcon,
  TransactionIcon,
  ServicesIcon,
  ServiceAccountIcon,
  SettlementsIcon,
  PreferencesIcon,
  FeesPricingIcon,
  AuditIcon,
  ReportsIcon,
  ChevronRightIcon,
} from "assets";
import { Search } from "components";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router/routes";
import styles from "./styles.module.scss";
import { useState } from "react";
import { MyContext } from "context/search";

interface SidebarType {
  active: customerPages;
  state:
    | customerPages
    | businessPages
    | settingsPages
    | "Logout"
    | "Support"
    | "CUSTOMERS"
    | "BUSINESSES"
    | "SETTINGS";

  url?: string;
  type: "link" | "header";
  action?: () => void;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SidebarItem: React.FC<SidebarType> = ({
  active,
  state,
  type,
  url = "",
  action,
  Icon,
}) => {
  return (
    <li
      className={`${state === "Audit Logs" && styles.last} ${
        type === "header" && styles.header
      } ${styles.sidebarItem} ${active === state ? styles.activeItem : ""}`}
    >
      {type === "link" ? (
        <Link onClick={action} className={styles.sidebarType} to={url}>
          <Icon
            className={`${styles.sidebarIcon} ${
              active === state || state === "Switch Organization"
                ? styles.activeIcon
                : ""
            }`}
          />
          <span className={styles.sidebarText}>{state}</span>
          {state === "Switch Organization" && (
            <ChevronRightIcon className={styles.downIcon} />
          )}
        </Link>
      ) : (
        <p className={`${styles.header}`}>{state}</p>
      )}
    </li>
  );
};

type customerPages =
  | "Switch Organization"
  | "Dashboard"
  | "Users"
  | "Guarantors"
  | "Loans"
  | "Decision Models"
  | "Savings"
  | "Loan Requests"
  | "Whitelist"
  | "Karma";

type businessPages =
  | "Organization"
  | "Loan Products"
  | "Savings Products"
  | "Fees and Charges"
  | "Transactions"
  | "Services"
  | "Service Account"
  | "Settlements"
  | "Reports";

type settingsPages = "Preferences" | "Fees and Pricing" | "Audit Logs";

export interface LayoutProps {
  active: customerPages;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ active, children }) => {
  const EmptyComponent = () => null;
  const SidebarItems: SidebarType[] = [
    {
      active,
      state: "Switch Organization",
      url: "",
      type: "link",
      Icon: OrganizationIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Dashboard",
      url: "",
      type: "link",
      Icon: DashboardIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "CUSTOMERS",
      url: "",
      type: "header",
      Icon: EmptyComponent,
      action: () => false,
    },
    {
      active,
      state: "Users",
      url: Routes.users,
      type: "link",
      Icon: UsersIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Guarantors",
      url: "",
      type: "link",
      Icon: GuarantorsIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Loans",
      url: "",
      type: "link",
      Icon: LoanIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Decision Models",
      url: "",
      type: "link",
      Icon: DecisionModelsIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Savings",
      url: "",
      type: "link",
      Icon: SavingsIcon,
      action: () => setShowMenu(false),
    },
    {
      active,
      state: "Loan Requests",
      type: "link",
      action: () => setShowLogout(true),
      Icon: LoanRequestIcon,
    },
    {
      active,
      state: "Whitelist",
      type: "link",
      action: () => setShowMenu(true),
      Icon: WhitelistIcon,
    },
    {
      active,
      state: "Karma",
      type: "link",
      action: () => setShowMenu(true),
      Icon: KarmaIcon,
    },
    {
      active,
      state: "BUSINESSES",
      url: "",
      type: "header",
      Icon: EmptyComponent,
      action: () => false,
    },
    {
      active,
      state: "Organization",
      type: "link",
      action: () => setShowMenu(true),
      Icon: BusinessOrganizationIcon,
    },
    {
      active,
      state: "Loan Products",
      type: "link",
      action: () => setShowMenu(true),
      Icon: LoanProductIcon,
    },
    {
      active,
      state: "Savings Products",
      type: "link",
      action: () => setShowMenu(true),
      Icon: SavingsProductsIcon,
    },
    {
      active,
      state: "Fees and Charges",
      type: "link",
      action: () => setShowMenu(true),
      Icon: FeesChargesIcon,
    },
    {
      active,
      state: "Transactions",
      type: "link",
      action: () => setShowMenu(true),
      Icon: TransactionIcon,
    },
    {
      active,
      state: "Services",
      type: "link",
      action: () => setShowMenu(true),
      Icon: ServicesIcon,
    },
    {
      active,
      state: "Service Account",
      type: "link",
      action: () => setShowMenu(true),
      Icon: ServiceAccountIcon,
    },
    {
      active,
      state: "Settlements",
      type: "link",
      action: () => setShowMenu(true),
      Icon: SettlementsIcon,
    },
    {
      active,
      state: "Reports",
      type: "link",
      action: () => setShowMenu(true),
      Icon: ReportsIcon,
    },
    {
      active,
      state: "SETTINGS",
      url: "",
      type: "header",
      Icon: EmptyComponent,
      action: () => false,
    },
    {
      active,
      state: "Preferences",
      type: "link",
      action: () => setShowMenu(true),
      Icon: PreferencesIcon,
    },
    {
      active,
      state: "Fees and Pricing",
      type: "link",
      action: () => setShowMenu(true),
      Icon: FeesPricingIcon,
    },
    {
      active,
      state: "Audit Logs",
      type: "link",
      action: () => setShowMenu(true),
      Icon: AuditIcon,
    },
    {
      active,
      state: "Fees and Pricing",
      type: "link",
      action: () => setShowMenu(true),
      Icon: FeesPricingIcon,
    },
    {
      active,
      state: "Audit Logs",
      type: "link",
      action: () => setShowMenu(true),
      Icon: AuditIcon,
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const menuRef = React.useRef(null);

  const onHide = () => {
    setShowMenu(false);
  };

  const onSearch = (searchTerm: string) => {
    return searchTerm;
  };

  const [searchArray, setSearchArray] = useState<any[]>([]);
  const {text, setText} = React.useContext(MyContext)

  const handleSearch = (s: string) => {
    setSearchTerm(s);
    setText(s);
    console.log(s);
  };

  return (
    <>
      <main className={styles.main}>
        <nav className={`${styles.sideBar} ${showMenu ? styles.overLay : ""}`}>
          <div className={styles.mobileNav}>
            <OrganizationIcon
              role="button"
              onClick={() => setShowMenu(!showMenu)}
              className={styles.menuBtn}
            />
          </div>
          <ul ref={menuRef} className={styles.sidebarList}>
            {SidebarItems.map((item, index) => (
              <SidebarItem {...item} key={index} />
            ))}
          </ul>
        </nav>
        <header className={styles.navBar}>
          <div className={styles.profileSec}>
            <LogoWithText className={styles.logo} />
            <Search
              className={styles.search}
              value={searchTerm}
              placeholder={"Search for anything"}
              submit={onSearch}
              handleChange={(e) => {
                handleSearch(e);
              }}
            />
            <div className={styles.details}>
              <p className={styles.docs}>Docs</p>
              <NotificationIcon className={styles.noti} />
              <img
                src={placeholderAvatar}
                alt="avatar"
                className={styles.img}
              />
              <div className={styles.name}>
                <p>Adedeji</p>
                <DropdownIcon />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
};

export { Layout };
