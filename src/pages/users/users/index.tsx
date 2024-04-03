import { UsersUI } from "features";
import { Preloader, UserTableItem } from "components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "router/routes";

const Users = () => {
  const [loading, setLoading] = useState(false);

  const usersArray: UserTableItem[] = [
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "florishadekogbe@gmail.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
  ];
  const navigate = useNavigate();
  const handleView = (id: number) => {
    navigate(Routes.user(id));
  };

  return (
    <>
      <Preloader loading={loading} />
      <UsersUI
        handleView={handleView}
        users={usersArray}
        handleFilter={() => {}}
        handleSearch={() => {}}
        searchTerm={""}
        pagination={{
          handleChange: () => {},
          total: 0,
          current: 0,
          count: 0,
          limit: 0,
        }}
        role={{
          label: undefined,
          value: undefined,
        }}
      />
    </>
  );
};

export { Users };
