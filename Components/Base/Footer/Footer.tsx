import React from "react";
import css from "./Footer.module.css";
import Logo from "../../atoms/Logo/Logo";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.flex}>
        <Logo />
        <div className={css.footerMenu}>
          <p>会社概要</p>
          <p>特定商取引法に関する表示</p>
          <p>お問い合わせ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
