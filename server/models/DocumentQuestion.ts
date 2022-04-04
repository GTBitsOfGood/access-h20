import { Types } from 'mongoose'

export interface documentQuestion {
  _id?: Types.ObjectId
  title: string
  description: string
};

export interface documentQA {
  question: documentQuestion
  answer: string
}
