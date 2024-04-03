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
  role?: string;
  dateOfBirth?: string;
  emailVerified?: boolean;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  idType?: string;
  profileStatus: string;
  idNumber?: string;
  idExpiryDate?: string;
  idAlbumDoc1?: string;
  idAlbumDoc2?: string;
  businessID?: number;
  isVerified: boolean;
  companyLogo?: string;
  regName?: string;
  regNumber?: string;
  businessEmail?: string;
  businessPhone?: string;
  businessCountry?: string;
  businessCity?: string;
  displayName?: string;
  desc?: string;
  certificate?: string;
  displayPhoto?: string;
  bankCountry?: string;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
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
  role,
  dateOfBirth,
  emailVerified,
  address,
  city,
  country,
  phone,
  idType,
  profileStatus,
  idNumber,
  idExpiryDate,
  idAlbumDoc1,
  idAlbumDoc2,
  businessID,
  isVerified,
  companyLogo,
  regName,
  regNumber,
  businessEmail,
  businessPhone,
  businessCountry,
  businessCity,
  displayName,
  desc,
  certificate,
  displayPhoto,
  bankCountry,
  bankName,
  accountName,
  accountNumber,
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
      type: "fill"
    },
    {
      type: "empty"
    },
    {
      type: "empty"
    },
  ]

  useEffect(() => { }, [profileStatus, isVerified]);
  const [isActive, setIsActive] = useState(false);

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
        <div className={styles.section__heading}>
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
        <div className={styles.section__content}>
          <div className={styles.first}>
            <div className={styles.userIcon}>
              <UserIcon />
            </div>
            <div className={styles.name}>
              <p className={styles.username}>{firstName}Grace Effiom</p>
              <p className={styles.userId} >{firstName}LSQFf587g90</p>
            </div>
            <div className={styles.tier}>
              <p>User's Tier</p>
              <span>
                {star.map((item) => (
                  <StarIcon className={`${styles[item.type]}`}/>
                ))}
              </span>
              <p>{lastName}</p>
            </div>
            <div className={styles.bank}>
              <span>₦200,000.00</span>
              <p className={styles.email}>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className={styles.second}>
            <span className={`${ isActive && styles.active}`} onClick={()=>{setIsActive(true)}}>General Details</span>
            <span >Documents</span>
            <span>Bank Details</span>
            <span>Loans</span>
            <span>Savings</span>
            <span>App and System</span>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.section__content}>
          <div>
            <span>ID Type</span>
            <p>{idType}</p>
          </div>
          <div>
            <span>ID No</span>
            <p>{idNumber}</p>
          </div>
          <div>
            <span>Expiration Date</span>
            <p>{idExpiryDate}</p>
          </div>
        </div>

        <div className={styles.section__documents}>
          {idAlbumDoc1 && (
            <div>
              <p>ID Front Page</p>
              <a href={idAlbumDoc1}></a>
            </div>
          )}
          {idAlbumDoc2 && (
            <div>
              <p>ID Back Page</p>
              <a href={idAlbumDoc2}></a>
            </div>
          )}
          {proofOfAddress && (
            <div>
              <p>Proof of Address</p>
              <a href={proofOfAddress}></a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export { UserProfileUI };
