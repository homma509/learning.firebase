import admin from 'firebase-admin';
import { collectionName } from '../services/learning/constants';

export const addCounter = async (
  db: admin.firestore.Firestore,
  colName: string,
  count = 1,
) => {
  const doc = db.collection(collectionName.docCounters).doc(colName);
  await doc.set(
    {
      count: admin.firestore.FieldValue.increment(count),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true },
  );
};
