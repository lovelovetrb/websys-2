import React from "react";
import css from "./Statusbar.module.css";

type Props = {
  status: string[];
  location: number;
};

const Statusbar = ({ status, location }: Props) => {
  return (
    <div className={css.wrapper}>
      <div>
        <progress
          className={css.statusbar}
          max={status.length - 1}
          value={location}
        />
        <div className={css.statusDotArea}>
          {status.map((item, index) => {
            let dotDesign = { backgroundColor: "#aeaeae" };
            if (location >= index) {
              dotDesign.backgroundColor = "#0bb200";
            }
            return (
              <span key={item} className={css.statusDot} style={dotDesign} />
            );
          })}
        </div>
      </div>
      <div className={`${css.flex} ${css.statusName}`}>
        {status.map((item, index) => {
          return (
            <div className={css.statusNameAria} key={index}>
              <p key={index}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statusbar;
