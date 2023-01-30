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
  const COLLECTION_NAME = "questionnaireData";
  const db = getFirestore();
  const docRef = db.collection(COLLECTION_NAME).doc();
  const insertData = req.body;
  await docRef
    .set(insertData)
    .then(res.status(200).end())
    .catch(res.status(500).end);
}
