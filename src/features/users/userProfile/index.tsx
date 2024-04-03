import { ArrowLeftIcon, OrganizationIcon, StarIcon, UserIcon } from "assets";
import styles from "./styles.module.scss";
import { Button, Pagination } from "components";
import { Routes } from "router/routes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface UserProfileProps {
  handleView: (id: string) => void;
  handleSuspend: (data: any) => void;
  handleUnsuspend: (data: any) => void;
  handleVerifyUser: (id: any) => void;
  handleVerifyBusiness: (id: any) => void;
  id?: string | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  idType?: string;
  profileStatus: string;
  idNumber?: string;
  idExpiryDate?: string;
  idAlbumDoc1?: string;
  idAlbumDoc2?: string;
  businessID?: number;
  isVerified: boolean;
  proofOfAddress?: string;
}

export type UserProps = Pick<
  UserProfileProps,
  Exclude<
    keyof UserProfileProps,
    | "handleView"
    | "property"
    | "handleSuspend"
    | "handleUnsuspend"
    | "handleVerifyUser"
    | "handleVerifyBusiness"
    | "id"
  >
>;

const UserProfileUI: React.FC<UserProfileProps> = ({
  handleView,
  handleSuspend,
  handleUnsuspend,
  handleVerifyUser,
  handleVerifyBusiness,
  id,
  firstName,
  lastName,
  email,
  idType,
  profileStatus,
  idNumber,
  idExpiryDate,
  idAlbumDoc1,
  idAlbumDoc2,
  businessID,
  isVerified,
  proofOfAddress,
}) => {
  const navigate = useNavigate();
  const suspendData: any = {
    email: email,
  };
  const unsuspendData: any = {
    email: email,
  };

  const handleClick = () => {
    if (profileStatus === "VERIFIED") {
      handleSuspend(suspendData);
    } else if (profileStatus === "SUSPENDED") {
      handleUnsuspend(unsuspendData);
    } else if (profileStatus === "UNVERIFIED") {
      handleVerifyUser(id);
    }
  };

  const handleBusiness = () => {
    if (!isVerified) {
      handleVerifyBusiness(businessID);
    }
  };

  const star = [
    {
      type: "fill",
    },
    {
      type: "empty",
    },
    {
      type: "empty",
    },
  ];

  useEffect(() => {}, [profileStatus, isVerified]);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles.userProfile}>
      <Button
        className={styles.backBtn}
        type="tertiary"
        onClick={() => {
          navigate(Routes.users);
        }}
      >
        <ArrowLeftIcon className={styles.arrowLeft} />
        Back to Users
      </Button>
      <section className={styles.section}>
        <div className={styles.heading}>
          <div className={styles.profile}>
            <h1 className={styles.section__ttl}>User Details</h1>
          </div>
          <div className={styles.buttons}>
            <Button
              className={`${styles.blacklistBtn}`}
              type="primary"
              onClick={handleClick}
            >
              BLACKLIST USER
            </Button>
            <Button
              className={`${styles.activeBtn}`}
              type="primary"
              onClick={handleClick}
            >
              ACTIVATE USER
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.first}>
            <div className={styles.userIcon}>
              <UserIcon />
            </div>
            <div className={styles.name}>
              <p className={styles.username}>{firstName}Grace Effiom</p>
              <p className={styles.userId}>{firstName}LSQFf587g90</p>
            </div>
            <div className={styles.tier}>
              <p>User's Tier</p>
              <span>
                {star.map((item) => (
                  <StarIcon className={`${styles[item.type]}`} />
                ))}
              </span>
            </div>
            <div className={styles.bank}>
              <span>₦200,000.00</span>
              <p className={styles.email}>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className={styles.second}>
            <span
              className={`${isActive && styles.active}`}
              onClick={() => {
                setIsActive(true);
              }}
            >
              General Details
            </span>
            <span>Documents</span>
            <span>Bank Details</span>
            <span>Loans</span>
            <span>Savings</span>
            <span>App and System</span>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.personal}>
            <h2 className={styles.head}>Personal Information</h2>
            <div className={styles.body}>
              <div className={styles.name}>
                <p className={styles.subhead}>FULL NAME</p>
                <p>Grace Effiom</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>EMAIL ADDRESS</p>
                <p>grace@gmail.com</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>BVN</p>
                <p>07060780922</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>GENDER</p>
                <p>Female</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>MARITAL STATUS</p>
                <p>Single</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>CHILDREN</p>
                <p>None</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>TYPE OF RESIDENCE</p>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>
          <div className={`${styles.personal} ${styles.education}`}>
            <h2 className={styles.head}>Education and Emplpyment</h2>
            <div className={styles.body}>
              <div className={styles.name}>
                <p className={styles.subhead}>LEVEL OF EDUCATION</p>
                <p>B.Sc</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>EMPLOYMENT STATUS</p>
                <p>Employed</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>SECTOR OF EMPLOYMENT</p>
                <p>Fintech</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>DURATION OF EMPLOYMENT</p>
                <p>2 Years</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>OFFICE EMAIL</p>
                <p>grace@lendsqr.com</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>MONTHLY INCOME</p>
                <p>₦200,000.00- ₦400,000.00</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>LOAN REPAYMENT</p>
                <p>40,000</p>
              </div>
            </div>
          </div>
          <div className={styles.personal}>
            <h2 className={styles.head}>Socials</h2>
            <div className={styles.body}>
              <div className={styles.name}>
                <p className={styles.subhead}>TWITTER</p>
                <p>@grace_effiom</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>FACEBOOK</p>
                <p>Grace Effiom</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>INSTAGRAM</p>
                <p>@grace_effiom</p>
              </div>
            </div>
          </div>
          <div className={styles.personal}>
            <h2 className={styles.head}>Guarantor</h2>
            <div className={styles.body}>
              <div className={styles.name}>
                <p className={styles.subhead}>FULL NAME</p>
                <p>Debby Ogana</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>EMAIL ADDRESS</p>
                <p>debby@gmail.com</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>
          <div className={styles.personal}>
            <h2 className={styles.head}>Next of Kin</h2>
            <div className={styles.body}>
              <div className={styles.name}>
                <p className={styles.subhead}>FULL NAME</p>
                <p>Debby Ogana</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>EMAIL ADDRESS</p>
                <p>debby@gmail.com</p>
              </div>
              <div className={styles.name}>
                <p className={styles.subhead}>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { UserProfileUI };
