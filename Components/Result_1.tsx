import React from "react";
import ChartComp from "./ChartComp";

const Result_1 = ({ resultData }: any) => {
  const maleRatio = getRatio(resultData, "male");
  const femaleRatio = getRatio(resultData, "female");
  const noneRatio = getRatio(resultData, "none");

  const data = {
    // x 軸のラベル
    labels: ["男性", "女性", "未回答"],
    datasets: [
      {
        label: "Dataset",
        // データの値
        data: [maleRatio, femaleRatio, noneRatio],
        // グラフの背景色
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        // グラフの枠線の色
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
        ],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mx-3">
      <div>
        <p>{`男:${maleRatio * 100}%`}</p>
        <p>{`女:${femaleRatio * 100}%`}</p>
        <p>{`未回答:${noneRatio * 100}%`}</p>
        <p>{`全回答数:${resultData.length}`}</p>
      </div>
      <div className="w-50">
        <ChartComp data={data} />
      </div>
    </div>
  );
};

const getRatio = (resultData: any, sex: String): number => {
  var answerNum = 0;
  resultData.map((item: any) => {
    if (item.answer == sex) {
      answerNum += 1;
    }
  });
  const ratio = answerNum / resultData.length;
  return ratio;
};

export default Result_1;
