import React from "react";
import { isTemplateExpression } from "typescript";

const Result_1 = ({ resultData }: any) => {
  const maleRatio = getRatio(resultData, "male");
  const femaleRatio = getRatio(resultData, "female");
  const noneRatio = getRatio(resultData, "none");
  return (
    <div className="mx-3">
      <p>{`男:${maleRatio * 100}%`}</p>
      <p>{`女:${femaleRatio * 100}%`}</p>
      <p>{`不明:${noneRatio * 100}%`}</p>
      <p>{`全回答数:${resultData.length}`}</p>
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
