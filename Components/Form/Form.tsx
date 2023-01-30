import React, { useEffect } from "react";
import css from "./Form.module.css";
import { data } from "../../types/type";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../atoms/Button/Button";
import TextArea from "../atoms/TextArea/TextArea";
import InputText from "../atoms/input_text/InputText";
import InputSelect from "../atoms/input_select/InputSelect";
import InputTextArea from "../atoms/InputTextArea/InputTextArea";
import TwoInputText from "../molcue/TwoInputText/TwoInputText/TwoInputText";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setState } from "../../store";
import { schema } from "../../yup/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Router from "next/router";
import AboutPersonalInfo from "../molcue/TwoInputText/AboutPersonalInfo/AboutPersonalInfo";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<data>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<data> = async (formData) => {
    dispatch(setState(watchAllVal));
    Router.push("/confirm");
  };

  const formData = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const watchAllVal = watch();
  useEffect(() => {
    dispatch(setState(watchAllVal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllVal.pref]);

  const text =
    "顧客体験向上のために、T社ではお客様アンケートを実施しております。アンケートにご回答いただいた方の中から抽選で10名様に、各店舗でご利用頂ける商品券1000円分をプレゼントさせていただいております。是非ご回答ください。";

  const ageList = [
    { label: "10代", value: 10 },
    { label: "20代", value: 20 },
    { label: "30代", value: 30 },
    { label: "40代", value: 40 },
    { label: "50代", value: 50 },
    { label: "60代", value: 60 },
    { label: "70代", value: 70 },
    { label: "80代", value: 80 },
    { label: "90代", value: 90 },
    { label: "100代", value: 100 },
  ];

  const sexList = [
    { label: "男性", value: "male" },
    { label: "女性", value: "female" },
    { label: "未回答", value: "undefined" },
  ];

  const frequencyList = [
    { label: "初めて", value: "初めて" },
    { label: "年に数回", value: "年に数回" },
    { label: "月に１回", value: "月に１回" },
    { label: "月に２〜３回", value: "月に２〜３回" },
    { label: "週に１回", value: "週に１回" },
    { label: "週に３回", value: "週に３回" },
    { label: "毎日", value: "毎日" },
  ];
  const satisfactionList = [
    { label: "とても満足", value: "とても満足" },
    { label: "満足", value: "満足" },
    { label: "どちらでもない", value: "どちらでもない" },
    { label: "不満", value: "不満" },
    { label: "とても不満", value: "とても不満" },
  ];

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.innner}>
        <TextArea text={text} />
        <InputText
          label="1. お名前(必須)"
          id="name"
          register={register}
          errors={errors}
        />
        <InputText
          label="2. メールアドレス（必須）"
          id="email"
          register={register}
          errors={errors}
        />
        <InputSelect
          label="3. 年齢"
          id="age"
          selectList={ageList}
          register={register}
          errors={errors}
        />
        <InputSelect
          label="4. 性別"
          id="sex"
          selectList={sexList}
          register={register}
          errors={errors}
        />
        <TwoInputText label="５．店舗名" register={register} errors={errors} />
        <InputSelect
          label="6. ご利用になった店舗のご利用頻度を教えてください"
          id="frequency"
          selectList={frequencyList}
          register={register}
          errors={errors}
        />
        <InputSelect
          label="7. ご利用になった店舗の総合満足度を教えてください"
          id="satisfaction"
          selectList={satisfactionList}
          register={register}
          errors={errors}
        />
        <InputTextArea
          label="8. 弊社のサービスについてご意見やご要望がございましたら、ぜひお聞かせください"
          id="other"
          register={register}
        />
        <AboutPersonalInfo />
      </div>
      <Button text="入力内容確認" onClickFunc={() => {}} />
    </form>
  );
}

export default Form;
