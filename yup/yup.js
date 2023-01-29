import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("名前を入力してください"), // （2）
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須項目です"),
  //shop: yup.string().required("店舗を選択してください"),
  //pref: yup.number().required("都道府県をを選択してください"),
});
