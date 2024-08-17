import {
  EmptyTable,
  MiniCard,
  Pagination,
  Filter,
  Table,
  TableHeaderItemProps,
  UserTable,
  UserTableItem,
} from "components";
import styles from "./styles.module.scss";
import {
  ActiveUsersIcon,
  EmptyStreet,
  LoanUserIcon,
  MainUsersIcon,
  SavingsUsersIcon,
} from "assets";
import { MyContext } from "context/search";
import * as React from "react";

const tableHeaderTitles: TableHeaderItemProps[] = [
  {
    title: "ORGANIZATION",
    Icon: Filter,
  },
  { title: "USERNAME", Icon: Filter },
  { title: "EMAIL", Icon: Filter },
  { title: "PHONE NUMBER", Icon: Filter },
  { title: "DATE JOINED", Icon: Filter },
  { title: "STATUS", Icon: Filter },
];

interface UsersProps {
  handleView: (id: number) => void;
  blacklist: (id: number) => void;
  activate: (id: number) => void;
  users: UserTableItem[];
  pagination: {
    handleChange: (page: any) => void;
    total: number;
    current: number;
    count: number;
  };
  handleLimitChange: (newLimit: number) => void;
}

const UsersUI: React.FC<UsersProps> = ({
  handleView,
  blacklist,
  activate,
  users: usersList,
  pagination,
  handleLimitChange
}) => {
  const { text } =  React.useContext(MyContext);
  
  const miniCards = [
    {
      id: 1,
      header: "USERS",
      users: 2453,
      Icon: MainUsersIcon,
    },
    {
      id: 2,
      header: "ACTIVE USERS",
      users: 2453,
      Icon: ActiveUsersIcon,
    },
    {
      id: 3,
      header: "USERS WITH LOANS",
      users: 12453,
      Icon: LoanUserIcon,
    },
    {
      id: 3,
      header: "USERS WITH SAVINGS",
      users: 102453,
      Icon: SavingsUsersIcon,
    },
  ];

  const users = usersList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
  
  return (
    <div className={styles.users}>
      <h1 className={styles.ttl}>Users</h1>
      <section className={styles.miniCard}>
        {miniCards.map((item, index) => (
          <MiniCard
            key={index}
            header={item.header}
            users={item.users.toLocaleString()}
            Icon={item.Icon}
          />
        ))}
      </section>
      <Table
        tableHeaderTitles={tableHeaderTitles}
        tableBody={
          <UserTable
            tableBodyItems={users}
            view={handleView}
            blacklist={blacklist}
            activate={activate}
            tableBodyRowClassName={styles.tableBodyItem}
            tableBodyStatus={styles.tableBodyStatus}
            statusItem={styles.statusItem}
          />
        }
        customTableClasses={{
          tableContainerClassName: styles.tableWrap,
          tableHeaderClassName: styles.tableHeader,
          tableHeaderItemClassName: styles.tableHeaderItem,
          statusClass: styles.statusClass,
        }}
        emptyTable={{
          show: users.length === 0,
          element: (
            <EmptyTable
              Vector={EmptyStreet}
              heading={"No user found"}
              text={"There are no users at this time"}
            />
          ),
        }}
      />
      <Pagination
        currentPage={pagination.current}
        totalPages={pagination.total}
        handleChange={pagination.handleChange}
        totalCount={pagination.count}
        name={"Users"}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
};

export { UsersUI };
