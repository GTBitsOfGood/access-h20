import { Types } from 'mongoose'

export interface otherQuestion {
  _id?: Types.ObjectId
  question: string
};

export interface otherQA {
  question: otherQuestion
  answer: string
}
