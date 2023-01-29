import React from "react";
import css from "./Button.module.css";

type Props = {
  text: string;
  onClickFunc: any;
};

const Button = ({ text, onClickFunc }: Props) => {
  return (
    <div className={css.button}>
      <button onClick={onClickFunc} className={css.text}>
        {text}
      </button>
    </div>
  );
};

export default Button;
