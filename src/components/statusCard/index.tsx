import {
  ActivateIcon,
  BlacklistIcon,
  EyeIcon,
  FilterIcon,
  SelectIcon,
} from "assets";
import styles from "./styles.module.scss";
import { useClickOutside } from "helpers";
import { useState, useRef } from "react";
import * as yup from "yup";
import { CustomSelect, Input } from "components/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OptionType } from "types";
import { Button } from "components/button";

interface FilterDetails {
  username?: string;
  date?: string;
  phoneNumber?: string;
  organization: {
    label: string;
    value: string;
  };
  status: {
    label: string;
    value: string;
  };
  email: string;
}

const initFilterData: FilterDetails = {
  organization: { label: "", value: "" },
  username: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: { label: "", value: "" },
};

const optionTypeSchema = yup.object({
  label: yup.string().required(),
  value: yup.string().required(),
});
const phoneRegExp = /^[0-9]{10}$/;

const filterSchema = yup
  .object({
    organization: optionTypeSchema,
    username: yup.string(),
    email: yup.string().email("Enter a valid email").required(),
    date: yup.string(),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    status: optionTypeSchema,
  })
  .required();

export interface StatusProps {
  className?: string;
  submit: (data: FilterDetails) => void;
}

const StatusCard: React.FC<StatusProps> = ({ submit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm<FilterDetails>({
    resolver: yupResolver(filterSchema),
    defaultValues: initFilterData,
  });
  const [show, setList] = useState(false);
  const [show2, setShow2] = useState(false);
  const sort: OptionType[] = [
    {
      label: "active",
      value: "active",
    },
    {
      label: "draft",
      value: "draft",
    },
  ];
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setList(false));

  const onSubmit: SubmitHandler<FilterDetails> = (data) => {
    submit(data);
    console.log(data);
  };

  const handleReset = () => {
    reset(initFilterData);
    submit(initFilterData);
  };

  console.log(show);

  return (
    <div ref={dropdownRef} className={`${styles.sort} ${""}`}>
      <div
        onClick={() => setList(!show)}
        role="button"
        className={styles.sortHd}
      >
        <SelectIcon />
      </div>

      {show && (
        <div className={styles.sortList}>
          {show ? (
            <form className={styles.sortList__items}>
              <div className={styles.eye}>
                <EyeIcon />
                <p>View Details</p>
              </div>
              <div className={styles.eye}>
                <BlacklistIcon />
                <p>Blacklist User</p>
              </div>
              <div className={styles.eye}>
                <ActivateIcon className={styles.fill} />
                <p>Activate User</p>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export { StatusCard };
