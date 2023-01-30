import React from "react";
import css from "./Check.module.css";
import Button from "../atoms/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LabelAndText from "../molcue/TwoInputText/LabelAndText/LabelAndText";
import axios from "axios";
import Router from "next/router";
const Check = () => {
  const formData = useSelector((state: RootState) => state);
  console.log(formData.form);
  const fetchData = async () => {
    const data = {
      name: formData.form.name,
      email: formData.form.email,
      age: formData.form.age,
      sex: enSex2jaSex(formData.form.sex),
      shop: `${getPref(formData.form.pref)} ${formData.form.shop}`,
      frequency: formData.form.frequency,
      satisfaction: formData.form.satisfaction,
      other: formData.form.other,
    };
    await axios.post("/api/post", data);
    await Router.push("/thanks");
  };
  return (
    <div className={css.check}>
      <div className={css.innner}>
        <LabelAndText label="1.名前" content={formData.form.name} />
        <LabelAndText label="2.メールアドレス" content={formData.form.email} />
        <LabelAndText label="3.年齢" content={`${formData.form.age}代`} />
        <LabelAndText label="4.性別" content={enSex2jaSex(formData.form.sex)} />
        <LabelAndText
          label="5.店名"
          content={`${getPref(formData.form.pref)} ${formData.form.shop}`}
        />
        <LabelAndText label="6.ご利用頻度" content={formData.form.frequency} />
        <LabelAndText label="7.満足度" content={formData.form.satisfaction} />
        <LabelAndText label="8.ご意見・ご要望" content={formData.form.other} />
      </div>
      <Button text="送信" onClickFunc={fetchData} />
    </div>
  );
};

const enSex2jaSex = (enSex: string): string => {
  if (enSex == "male") {
    return "男性";
  }
  if (enSex == "female") {
    return "女性";
  }
  if (enSex == "undefined") {
    return "未回答";
  }
  return "";
};

const getPref = (prefNum: number): string => {
  const prefList = [
    { value: 0, label: "未回答" },
    { value: 1, label: "北海道" },
    { value: 2, label: "青森県" },
    { value: 3, label: "岩手県" },
    { value: 4, label: "宮城県" },
    { value: 5, label: "秋田県" },
    { value: 6, label: "山形県" },
    { value: 7, label: "福島県" },
    { value: 8, label: "茨城県" },
    { value: 9, label: "栃木県" },
    { value: 10, label: "群馬県" },
    { value: 11, label: "埼玉県" },
    { value: 12, label: "千葉県" },
    { value: 13, label: "東京都" },
    { value: 14, label: "神奈川県" },
    { value: 15, label: "新潟県" },
    { value: 16, label: "富山県" },
    { value: 17, label: "石川県" },
    { value: 18, label: "福井県" },
    { value: 19, label: "山梨県" },
    { value: 20, label: "長野県" },
    { value: 21, label: "岐阜県" },
    { value: 22, label: "静岡県" },
    { value: 23, label: "愛知県" },
    { value: 24, label: "三重県" },
    { value: 25, label: "滋賀県" },
    { value: 26, label: "京都府" },
    { value: 27, label: "大阪府" },
    { value: 28, label: "兵庫県" },
    { value: 29, label: "奈良県" },
    { value: 30, label: "和歌山県" },
    { value: 31, label: "鳥取県" },
    { value: 32, label: "島根県" },
    { value: 33, label: "岡山県" },
    { value: 34, label: "広島県" },
    { value: 35, label: "山口県" },
    { value: 36, label: "徳島県" },
    { value: 37, label: "香川県" },
    { value: 38, label: "愛媛県" },
    { value: 39, label: "高知県" },
    { value: 40, label: "福岡県" },
    { value: 41, label: "佐賀県" },
    { value: 42, label: "長崎県" },
    { value: 43, label: "熊本県" },
    { value: 44, label: "大分県" },
    { value: 45, label: "宮崎県" },
    { value: 46, label: "鹿児島県" },
    { value: 47, label: "沖縄県" },
  ];
  const prefName: string = prefList[prefNum] ? prefList[prefNum].label : "";
  return prefName;
};

export default Check;
