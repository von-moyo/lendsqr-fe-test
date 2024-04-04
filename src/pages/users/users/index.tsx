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
      name: "Adekogbe",
      email: "adedeji@lendsqr.com",
      phoneNumber: "09074738293",
      dateCreated: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Irorun",
      name: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "09074738293",
      dateCreated: "April 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "10",
      organization: "Lendstar",
      name: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "09074738293",
      dateCreated: "April 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "10",
      organization: "Lendstar",
      name: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Tosin Dokunmu",
      email: "tosin@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 10, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "10",
      organization: "Lendstar",
      name: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Tosin Dokunmu",
      email: "tosin@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 10, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Lendstar",
      name: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "10",
      organization: "Lendsqr",
      name: "Adekogbe Florish",
      email: "tosin@lendstar.com",
      phoneNumber: "09074738293",
      dateCreated: "April 15, 2020 10:00 AM",
      status: "Pending",
    },
  ];
  const newArray = [];

  for (let i = 0; i < 50; i++) {
    newArray.push(...usersArray);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const totalUsers = newArray.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  console.log(currentPage, totalPages);
  const paginatedUsers = newArray.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const info = [];
  for (let i = 1; i <= totalPages; i++) {
    info.push({
      label: i.toString(),
      value: i.toString(),
    });
  }

  const navigate = useNavigate();
  const handleView = (id: number) => {
    navigate(Routes.user(id));
  };
  const handleBlacklisting = (id: number) => {
    navigate(Routes.user(id));
  };
  const handleActivate = (id: number) => {
    navigate(Routes.user(id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Preloader loading={loading} />
      <UsersUI
        handleView={handleView}
        blacklist={handleBlacklisting}
        activate={handleActivate}
        users={paginatedUsers}
        handleFilter={() => {}}
        handleSearch={() => {}}
        searchTerm={""}
        pagination={{
          handleChange: handlePageChange,
          total: totalPages,
          current: currentPage,
          count: totalUsers,
          limit: usersPerPage,
          info: info,
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
