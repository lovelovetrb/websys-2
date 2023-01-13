import React from "react";
const Result_3 = ({ resultData }: any) => {
  const Ratio_satisfaction_1 = getRatio(resultData, 1);
  const Ratio_satisfaction_2 = getRatio(resultData, 2);
  const Ratio_satisfaction_3 = getRatio(resultData, 3);
  const Ratio_satisfaction_4 = getRatio(resultData, 4);
  const Ratio_satisfaction_5 = getRatio(resultData, 5);
  return (
    <div className="mx-3">
      <p>{`とても満足:${Ratio_satisfaction_5 * 100}%`}</p>
      <p>{`満足:${Ratio_satisfaction_4 * 100}%`}</p>
      <p>{`どちらでもない:${Ratio_satisfaction_3 * 100}%`}</p>
      <p>{`不満:${Ratio_satisfaction_2 * 100}%`}</p>
      <p>{`とても不満:${Ratio_satisfaction_1 * 100}%`}</p>
      <p>{`全回答数:${resultData.length}`}</p>
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
