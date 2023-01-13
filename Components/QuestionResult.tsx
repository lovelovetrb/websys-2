import React from "react";
import Result_1 from "./Result_1";
import Result_2 from "./Result_2";
import Result_3 from "./Result_3";
import Result_4 from "./Result_4";

const QuestionResult = (props: any) => {
  const { questionNum, data } = props;
  // const conditions;
  return (
    <div className="mt-3 w-50">
      <h4>{`${questionNum}:${data[0][questionNum].question}`} </h4>
      {getComponent(questionNum, data)}
    </div>
  );
};

const getComponent = (questionNum: number, data: any) => {
  const resultData: any[] = [];
  data.map((item: any) => {
    resultData.push(item[questionNum]);
  });

  switch (questionNum) {
    case 1:
      return <Result_1 resultData={resultData} />;
      break;
    case 2:
      return <Result_2 resultData={resultData} />;
      break;
    case 3:
      return <Result_3 resultData={resultData} />;
      break;
    case 4:
      return <Result_4 resultData={resultData} />;
      break;
    default:
      return <p>データが見つかりません</p>;
  }
};

export default QuestionResult;
