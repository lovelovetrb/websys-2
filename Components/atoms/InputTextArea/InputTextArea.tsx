import React from "react";
import css from "./InputTextArea.module.css";

type Props = {
  label: string;
  id: string;
  register:any;
};

const InputText = ({ label, id,register }: Props) => {
  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <p className={css.label}>{label}</p>
        <textarea className={`${css.input}`} rows={4} cols={40} {...register(id)}/>
      </label>
    </div>
  );
};

export default InputText;
