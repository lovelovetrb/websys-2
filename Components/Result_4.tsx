import React from "react";

const Result_4 = ({ resultData }: any) => {
  const bookList: string[] = [];
  resultData.map((item: any) => {
    item.answer.split("\n").map((i: string) => {
      bookList.push(i);
    });
  });
  console.log(bookList);
  return (
    <div className="mx-3">
      {bookList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default Result_4;
