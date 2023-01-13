import React from "react";

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
