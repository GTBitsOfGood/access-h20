import { Types } from 'mongoose'

export interface eligibilityQuestion {
  _id?: Types.ObjectId
  title: string
  question: string
};
