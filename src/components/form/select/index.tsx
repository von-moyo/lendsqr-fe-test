import * as React from "react";
import styles from "./styles.module.css";
import Select from "react-select";

interface CustomSelectProps {
  parentClassName?: string;
  inputClass?: string;
  dataTestID?: string;
  onChange: (e: any) => void;
  validatorMessage: string;
  name: string;
  placeholder: string;
  label: string;
  id?: string;
  options: any[];
  value: any;
  isMulti?: boolean;
  disabled?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  dataTestID,
  placeholder,
  parentClassName,
  name,
  validatorMessage,
  onChange,
  inputClass,
  label,
  id,
  options,
  value,
  isMulti,
  disabled,
  menuPlacement,
}) => {
  return (
    <div
      className={`${styles.inputWrapper} ${parentClassName} ${
        validatorMessage ? styles.error : ""
      }`}
    >
      {label && <label className={styles.label}>{label}</label>}
      <Select
        onChange={(x: any) => onChange(x)}
        placeholder={placeholder}
        data-testid={dataTestID}
        className={`${inputClass} ${styles.select}`}
        classNamePrefix="formSelect"
        id={id}
        name={name}
        options={options}
        value={value.value ? value : null}
        isMulti={isMulti}
        isDisabled={disabled}
        menuPlacement={menuPlacement}
      />
      {validatorMessage && (
        <small className={styles.message}>{validatorMessage}</small>
      )}
    </div>
  );
};

export { CustomSelect };
export * from "./util";
