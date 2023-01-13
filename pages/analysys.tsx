/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import QuestionResult from "../Components/QuestionResult";
import { data } from "../types/type";
import NowDate from "../Components/date";

const analysys = () => {
  const [data, setData] = useState<data[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/get")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (data.length == 0) return <p>No profile data</p>;

  const questionList: number[] = [1, 2, 3, 4];

  return (
    <main className="container mt-5">
      <div className="row">
        <h3 className="w-50 ">アンケート結果</h3>
        <NowDate />
      </div>
      <div className="row">
        {questionList.map((item, index) => {
          return <QuestionResult questionNum={item} key={index} data={data} />;
        })}
      </div>
    </main>
  );
};

export default analysys;
