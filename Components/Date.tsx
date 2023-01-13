import React from "react";

const NowDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <p className="w-50 text-end">{`${year}/${month}/${day} ${hours}時${minutes}分 現在 `}</p>
  );
};

export default NowDate;
