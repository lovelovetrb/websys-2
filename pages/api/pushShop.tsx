// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const { cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../../websys-2-firebase-adminsdk-x1py6-791e9622bd.json");
const admin = require("firebase-admin");

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const COLLECTION_NAME = "shop";
  const db = getFirestore();
  const docRef = db.collection(COLLECTION_NAME);
  const shopData = [
    { label: "未選択", value: "未選択" },
    { label: "AA店", value: "AA店" },
    { label: "BB店", value: "BB店" },
  ];

  for (let i: number = 0; i < 47; i++) {
    await docRef
      .doc(String(i + 1))
      .set({ shopID: i + 1, shopData })
      .then(res.status(200).end())
      .catch(res.status(500).end());
  }
  res.status(200);
}
