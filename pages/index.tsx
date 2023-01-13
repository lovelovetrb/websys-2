import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { data } from "../types/type";
import axios from "axios";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<data>();
  const onSubmit: SubmitHandler<data> = async (formData) => {
    const submitData = {
      1: {
        question: "性別",
        answer: formData.sex,
      },
      2: {
        question: "年齢",
        answer: formData.age,
      },
      3: {
        question: "満足度",
        answer: formData.satisfaction,
      },
      4: {
        question: "おすすめの本",
        answer: formData.books,
      },
    };

    await axios.post("api/post", submitData);
    alert("送信が完了しました");
    reset();
  };

  return (
    <>
      <Head>
        <title>websys-2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mt-5">
        <h2 className={styles.title}>
          <span>A店　お客様アンケート</span>
        </h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className={`mt-3 ${styles.label}`}>
            Q1:性別(必須)
          </label>
          <div>
            <label htmlFor="male">
              <input
                required
                className={styles.radio}
                type="radio"
                value="male"
                {...register("sex", { required: true })}
                id="male"
              />
              男性
            </label>
          </div>
          <div>
            <label htmlFor="female">
              <input
                required
                className={styles.radio}
                type="radio"
                value="female"
                {...register("sex", { required: true })}
                id="female"
              />
              女性
            </label>
          </div>
          <div>
            <label htmlFor="undefinded">
              <input
                required
                className={styles.radio}
                type="radio"
                value="none"
                {...register("sex", { required: true })}
                id="undefinded"
              />
              未回答
            </label>
          </div>
          <label htmlFor="" className={`mt-3 ${styles.label}`}>
            Q2:年齢(必須)
          </label>
          <div>
            <select id="" {...register("age", { required: true })}>
              <option value="10">10歳〜</option>
              <option value="20">20歳〜</option>
              <option value="30">30歳〜</option>
              <option value="40">40歳〜</option>
              <option value="50">50歳〜</option>
              <option value="60">60歳〜</option>
              <option value="70">70歳〜</option>
              <option value="80">80歳〜</option>
              <option value="90">90歳〜</option>
              <option value="100">100歳〜</option>
            </select>
          </div>
          <label htmlFor="" className={`mt-3 ${styles.label}`}>
            Q3:Y書店の満足度(必須)
          </label>
          <div className="mt-1">
            <label htmlFor="satisfaction-5">
              <input
                required
                className={styles.radio}
                type="radio"
                value="5"
                {...register("satisfaction", { required: true })}
                id="satisfaction-5"
              />
              とても満足
            </label>
          </div>
          <div>
            <label htmlFor="satisfaction-4">
              <input
                required
                className={styles.radio}
                type="radio"
                value="4"
                {...register("satisfaction", { required: true })}
                id="satisfaction-4"
              />
              満足
            </label>
          </div>
          <div>
            <label htmlFor="satisfaction-3">
              <input
                required
                className={styles.radio}
                type="radio"
                value="3"
                {...register("satisfaction", { required: true })}
                id="satisfaction-3"
              />
              どちらでもない
            </label>
          </div>
          <div>
            <label htmlFor="satisfaction-2">
              <input
                required
                className={styles.radio}
                type="radio"
                value="2"
                {...register("satisfaction", { required: true })}
                id="satisfaction-2"
              />
              不満
            </label>
          </div>
          <div>
            <label htmlFor="satisfaction-1">
              <input
                className={styles.radio}
                required
                type="radio"
                value="1"
                {...register("satisfaction", { required: true })}
                id="satisfaction-1"
              />
              とても不満
            </label>
          </div>
          <label htmlFor="" className={`mt-3 ${styles.label}`}>
            Q4:最近買ってよかった本
          </label>
          <p>一冊ごとに改行してください</p>
          <div>
            <textarea
              className={`${styles.text} p-3`}
              rows={4}
              cols={40}
              {...register("books")}
            />
          </div>
          <input className="btn btn-primary mt-3" type="submit" value="送信" />
        </form>
      </main>
    </>
  );
}
