import { UsersUI } from "features";
import { Preloader, UserTableItem } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "router/routes";
import axios from "axios";

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

const Users = () => {
  const [users, setUsers] = useState<UserTableItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const paginatedUsers = users.slice(
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

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/templates/yfAg_qoICtcr/data", {
          baseURL: process.env.REACT_APP_API_BASE_URL,
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "lendsqrAdminAccess"
            )}`,
          },
        })
        .then((response) => {
          const userResults = response.data;
          type optionType = {
            year: "numeric" | "2-digit" | undefined;
            month: "long";
            day: "numeric";
            hour: "numeric";
            minute: "numeric";
            second: "numeric";
            hour12: true;
          };
          const options: optionType = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          };
          const userList: UserTableItem[] = userResults.map((user: any) => ({
            id: user.id,
            organization: user.organization,
            name: user.profile.name,
            email: user.email,
            phoneNumber: "09086465372",
            dateCreated: new Intl.DateTimeFormat("en-US", options).format(
              new Date(user.updatedAt)
            ),
            status: user.roles[0],
          }));
          setUsers(userList);
        })
        .catch((error) => console.log(error))
        .finally(() => {
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <UsersUI
        handleView={handleView}
        blacklist={handleBlacklisting}
        activate={handleActivate}
        users={paginatedUsers}
        pagination={{
          handleChange: handlePageChange,
          total: totalPages,
          current: currentPage,
          count: totalUsers,
          limit: usersPerPage,
          info: info,
        }}
      />
    </>
  );
};

export { Users };
