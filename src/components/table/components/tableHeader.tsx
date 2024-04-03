import React, { useState } from "react";
import styles from "../styles.module.scss";
import { FilterProps } from "components/filter";

// Table header item
interface TableHeaderItemProps {
  title: string;
  Icon: React.FunctionComponent<FilterProps>;
}

// Table header props
interface TableHeaderProps {
  tableHeaderTitles: TableHeaderItemProps[];
  tableHeadItemClassName?: string;
  tableHeaderClassName?: string;
  tableRowClassName?: string;
}

/**
 * This is a representation of the table header
 * ---------------------------------------------------
 * @param tableHeaderTitles - @interface TableHeaderProps
 *
 */

const TableHeader: React.FC<TableHeaderProps> = ({
  tableHeaderTitles,
  tableHeadItemClassName = "",
  tableHeaderClassName = "",
  tableRowClassName = "",
}) => {
  const [show, setShow] = useState(false)
  return (
    <section className={`${styles.tableHeader} ${tableHeaderClassName}`}>
      {tableHeaderTitles.map((header, idx) => {
        const Icon = header.Icon;
        return (
          <div className={styles.tableHeaderStyle}>
            <span
              className={tableHeadItemClassName}
              key={`${header}${idx + 1}`}
            >
              {header.title}
            </span>
            <Icon
              className={styles.filterIcon}
              // show={show}
              submit={() => { }}
              // close={()=>{}}
            />
          </div>
        );
      })}
    </section>
  );
};

export { TableHeader };
export type { TableHeaderItemProps, TableHeaderProps };
