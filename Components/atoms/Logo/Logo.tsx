import React from "react";
import css from "./Logo.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="https://www.shizuoka.ac.jp/">
      <h1 className={css.companyName}>株式会社 T</h1>
    </Link>
  );
};

export default Logo;
