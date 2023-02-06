import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../types/type";

const { cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../../websys-2-firebase-adminsdk-x1py6-791e9622bd.json");
const admin = require("firebase-admin");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getData(req.query.shop);
  res.status(200).json(data);
}

export async function getData(query: any) {
  console.log(query);
  //　初期化する
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();
  const COLLECTION_NAME = query;
  const dataList: any[] = [];
  const docRef = db.collection(COLLECTION_NAME);
  const snapshot = await docRef.orderBy("shopID", "asc").get();
  snapshot.forEach((doc: { id: any; data: () => any }) => {
    dataList.push(doc.data());
  });

  return dataList;
}
