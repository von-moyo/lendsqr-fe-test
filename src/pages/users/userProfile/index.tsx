import { UserProfileUI } from "features";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Preloader } from "components";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Preloader loading={loading} />
      <UserProfileUI
        handleView={() => { } }
        handleSuspend={() => { } }
        handleUnsuspend={() => { } }
        handleVerifyUser={() => { } }
        handleVerifyBusiness={() => { }}
        profileStatus={""}
        isVerified={false}
      />
    </>
  );
};

export { UserProfile };
