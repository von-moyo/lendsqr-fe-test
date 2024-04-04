import * as React from "react";
import { TableBody, TableBodyRow } from "../../components";
import styles from "./styles.module.scss";
import { SelectIcon } from "assets";
import { StatusCard } from "components/statusCard";

// Test Table Body Item
export interface UserTableItem {
  id: string;
  organization: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateCreated: string;
  status: "Inactive" | "Active" | "Pending" | "Blacklisted";
}

// Test Table Body Props
interface TableBodyProps {
  tableBodyItems: UserTableItem[];
  tableBodyItemClassName?: string;
  tableBodyRowClassName?: string;
  tableBodyStatus?: string;
  statusItem?: string;
  statusColor?: string;
  view: (id: any) => void;
  blacklist: (id: any) => void;
  activate: (id: any) => void;
}

const UserTable: React.FC<TableBodyProps> = ({
  tableBodyItems,
  tableBodyItemClassName,
  tableBodyRowClassName,
  tableBodyStatus,
  statusItem,
  statusColor,
  view,
  blacklist,
  activate,
}) => {
  return (
    <>
      <TableBody customClassName={`${styles.tableBody}`}>
        {tableBodyItems.map((item, index) => (
          <TableBodyRow
            key={`body ${index}`}
            customClassName={`${styles.tableBodyRow} ${tableBodyRowClassName}`}
          >
            <span className={tableBodyItemClassName}>{item.organization}</span>
            <span className={tableBodyItemClassName}>{item.name}</span>
            <span className={`${tableBodyItemClassName} ${styles.email}`}>
              {item.email}
            </span>
            <span className={tableBodyItemClassName}>{item.phoneNumber}</span>
            <span className={tableBodyItemClassName}>{item.dateCreated}</span>
            <span className={`${tableBodyItemClassName} ${tableBodyStatus}`}>
              <p
                className={`
              ${statusItem} 
              ${statusColor} 
              ${styles.status} 
              ${styles[item.status]}
              ${
                item.status === "Inactive"
                  ? styles.inactive
                  : item.status === "Active"
                  ? styles.active
                  : item.status === "Pending"
                  ? styles.pending
                  : item.status === "Blacklisted"
                  ? styles.blacklisted
                  : ""
              }
              `}
              >
                {item.status}
              </p>
              <StatusCard
                className={styles.statusCard}
                submit={() => {
                  view(item.id);
                }}
                blacklist={() => {
                  blacklist(item.id);
                }}
                activate={() => {
                  activate(item.id);
                }}
              />
            </span>
          </TableBodyRow>
        ))}
      </TableBody>
    </>
  );
};

export { UserTable };
