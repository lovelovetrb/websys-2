import React from "react";
import css from "./InputSelect.module.css";
import { selectList } from "../../../types/type";

type Props = {
  label: string;
  id: string;
  selectList: selectList;
  register: any;
  errors: any;
};

const InputText = ({ label, id, selectList, register, errors }: Props) => {
  console.log();
  return (
    <>
      <div className={css.wrapper}>
        <label htmlFor={id}>
          <p className={css.label}>{label}</p>
          <select className={css.input} id={id} {...register(id)}>
            {selectList.map((item, index) => {
              return (
                <option key={index} value={item.value} className={css.option}>
                  {item.label}
                </option>
              );
            })}
          </select>
          <span>{errors[id]?.message}</span>
        </label>
      </div>
    </>
  );
};

export default InputText;
