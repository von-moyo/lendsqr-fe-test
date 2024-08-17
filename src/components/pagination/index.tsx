import * as React from "react";
import styles from "./styles.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "assets";
import { CustomSelect } from "components/form";
import { OptionType } from "types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface SelectData {
  select: {
    label?: any;
    value?: any;
  };
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleChange: (x: number) => void;
  totalCount: number;
  hide?: boolean;
  name: string;
  select?: (data: SelectData) => void;
  onLimitChange: (newLimit: number) => void;
}

const initialSelectValues: SelectData = {
  select: { label: "", value: "" },
}

const SelectSchema = yup.object({
  select: yup.object({
    label: yup.string().nullable(),
    value: yup.string().nullable(),
  }),
})


const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  totalPages,
  handleChange,
  onLimitChange,
  hide,
}) => {
  const {
    formState: { errors },
    watch,
    setValue
  } = useForm<SelectData>({
    resolver: yupResolver(SelectSchema),
    defaultValues: initialSelectValues,
  });
  const handleIncrease = () => {
    if (currentPage < totalPages) handleChange(currentPage + 1);
  };
  const handleDecrease = () => {
    if (currentPage > 1) handleChange(currentPage - 1);
  };
  if (hide) return null;
  const hiringFrequency: OptionType[] = [
    {
      label: "10",
      value: "10",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "50",
      value: "50",
    },
    {
      label: "75",
      value: "75",
    },
  ];
  return (
    <section className={styles.pagination}>
      <div className={styles.left}>
        Showing
        <CustomSelect
          onChange={(val) => {
            setValue(`select`, val);
            onLimitChange(Number(val.value));
          }}
          validatorMessage={
            errors?.select
              ? errors?.select?.message ?? ""
              : ""
          }
          name={`select`}
          placeholder={"Please select"}
          options={hiringFrequency}
          value={watch("select")}
          parentClassName={styles.inputContainer}
          inputClass={styles.select}
          label=""
          menuPlacement="top"
          />
        out of {totalCount}
      </div>
      <div className={styles.inputBox}>
        <section className={styles.icon}>
          <ChevronLeftIcon onClick={handleDecrease} className={styles.btn} />
        </section>
        <div className={styles.current}>{currentPage}</div>
        <div>{currentPage + 1}</div>
        <div>{currentPage + 2}</div>
        <div>...</div>
        <div>{currentPage + 14}</div>
        <div>{currentPage + 15}</div>
        <section className={styles.icon}>
          <ChevronRightIcon onClick={handleIncrease} className={styles.btn} />
        </section>
      </div>
    </section>
  );
};

export { Pagination };
