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
  users: UserTableItem[];
  handleFilter: (data: any) => void;
  handleSearch: (data: any) => void;
  searchTerm: string;
  pagination: {
    handleChange: (page: any) => void;
    total: number;
    current: number;
    count: number;
    limit: number;
  };
  role: {
    label?: any;
    value?: any;
  };
}

const UsersUI: React.FC<UsersProps> = ({
  role,
  searchTerm,
  handleView,
  users,
  pagination,
}) => {
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
            tableBodyRowClassName={styles.tableBodyItem}
            tableBodyStatus={styles.tableBodyStatus}
            statusItem={styles.statusItem}
          />
        }
        customTableClasses={{
          tableContainerClassName: styles.tableWrap,
          tableHeaderClassName: styles.tableHeader,
          tableHeaderItemClassName: styles.tableHeaderItem,
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
        pageLimit={pagination.limit}
        name={"Users"}
      />
    </div>
  );
};

export { UsersUI };
