import React from "react";
import ChartComp from "./ChartComp";

const Result_2 = ({ resultData }: any) => {
  const Ratio_10 = getRatio(resultData, 10);
  const Ratio_20 = getRatio(resultData, 20);
  const Ratio_30 = getRatio(resultData, 30);
  const Ratio_40 = getRatio(resultData, 40);
  const Ratio_50 = getRatio(resultData, 50);
  const Ratio_60 = getRatio(resultData, 60);
  const Ratio_70 = getRatio(resultData, 70);
  const Ratio_80 = getRatio(resultData, 80);
  const Ratio_90 = getRatio(resultData, 90);
  const Ratio_100 = getRatio(resultData, 100);

  const data = {
    // x 軸のラベル
    labels: [
      "10代",
      "20代",
      "30代",
      "40代",
      "50代",
      "60代",
      "70代",
      "80代",
      "90代",
      "100代",
    ],
    datasets: [
      {
        label: "Dataset",
        // データの値
        data: [
          Ratio_10,
          Ratio_20,
          Ratio_30,
          Ratio_40,
          Ratio_50,
          Ratio_60,
          Ratio_70,
          Ratio_80,
          Ratio_90,
          Ratio_100,
        ],
        // グラフの背景色
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        // グラフの枠線の色
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mx-3">
      <p>{`10代:${Ratio_10 * 100}%`}</p>
      <p>{`20代:${Ratio_20 * 100}%`}</p>
      <p>{`30代:${Ratio_30 * 100}%`}</p>
      <p>{`40代:${Ratio_40 * 100}%`}</p>
      <p>{`50代:${Ratio_50 * 100}%`}</p>
      <p>{`60代:${Ratio_60 * 100}%`}</p>
      <p>{`70代:${Ratio_70 * 100}%`}</p>
      <p>{`80代:${Ratio_80 * 100}%`}</p>
      <p>{`90代:${Ratio_90 * 100}%`}</p>
      <p>{`100代:${Ratio_100 * 100}%`}</p>
      <p>{`全回答数:${resultData.length}`}</p>
      <div className="w-50">
        <ChartComp data={data} />
      </div>
    </div>
  );
};

const getRatio = (resultData: any, age: number): number => {
  var answerNum = 0;
  resultData.map((item: any) => {
    if (item.answer == age) {
      answerNum += 1;
    }
  });
  const ratio = answerNum / resultData.length;
  return ratio;
};

export default Result_2;
