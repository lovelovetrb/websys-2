import React from "react";
import css from "./LabelAndText.module.css";

type Props = {
  label: string;
  content: string;
};

const LabelAndText = ({ label, content }: Props) => {
  return (
    <div className={css.innner}>
      <label htmlFor="" className={css.label}>
        {label}
      </label>
      <p className={css.content}>{content}</p>
    </div>
  );
};

export default LabelAndText;
