import React from "react";
import css from "./InputText.module.css";

type Props = {
  label: string;
  id: string;
  register: any;
  errors: any;
};

const InputText = ({ label, id, register, errors }: Props) => {
  console.log();

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <p className={css.label}>{label}</p>
        <input className={css.input} id={id} {...register(id)} />
      </label>
      <p className={css.error}>{errors[id]?.message}</p>
    </div>
  );
};

export default InputText;
