import React from "react";
import ChartComp from "./ChartComp";
const Result_3 = ({ resultData }: any) => {
  const Ratio_satisfaction_1 = getRatio(resultData, 1);
  const Ratio_satisfaction_2 = getRatio(resultData, 2);
  const Ratio_satisfaction_3 = getRatio(resultData, 3);
  const Ratio_satisfaction_4 = getRatio(resultData, 4);
  const Ratio_satisfaction_5 = getRatio(resultData, 5);

  const data = {
    // x 軸のラベル
    labels: ["とても満足", "満足", "どちらでもない", "不満", "とても不満"],
    datasets: [
      {
        label: "Dataset",
        // データの値
        data: [
          Ratio_satisfaction_5,
          Ratio_satisfaction_4,
          Ratio_satisfaction_3,
          Ratio_satisfaction_2,
          Ratio_satisfaction_1,
        ],
        // グラフの背景色
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        // グラフの枠線の色
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mx-3">
      <p>{`とても満足:${Ratio_satisfaction_5 * 100}%`}</p>
      <p>{`満足:${Ratio_satisfaction_4 * 100}%`}</p>
      <p>{`どちらでもない:${Ratio_satisfaction_3 * 100}%`}</p>
      <p>{`不満:${Ratio_satisfaction_2 * 100}%`}</p>
      <p>{`とても不満:${Ratio_satisfaction_1 * 100}%`}</p>
      <p>{`全回答数:${resultData.length}`}</p>
      <div className="w-50">
        <ChartComp data={data} />
      </div>
    </div>
  );
};

const getRatio = (resultData: any, satisfaction: number): number => {
  var answerNum = 0;
  resultData.map((item: any) => {
    if (item.answer == satisfaction) {
      answerNum += 1;
    }
  });
  const ratio = answerNum / resultData.length;
  return ratio;
};

export default Result_3;
