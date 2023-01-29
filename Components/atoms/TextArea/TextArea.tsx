import React from "react";
import css from "./TextArea.module.css"

type Props = {
  text: string;
};

const TextArea = ({ text }:Props) => {
  return <p className={css.text}>{text}</p>;
};

export default TextArea;
