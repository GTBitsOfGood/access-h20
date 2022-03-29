import mongoose, { Schema } from 'mongoose'

const InfoSubmissionSchema = new Schema({
  accountId: {
    type: String,
    required: true
  },
  eligibilityQuestions: {
    type: [
      {
        question: {
          title: String,
          question: String
        },
        answer: Boolean
      }
    ],
    required: false
  },
  documents: {
    type: [
      {
        question: {
          title: String,
          description: String
        },
        answer: String
      }
    ],
    required: false
  },
  otherQuestions: {
    type: [
      {
        question: {
          question: String
        },
        answer: String
      }
    ],
    required: false
  }
})

export default mongoose.models?.InfoSubmission ??
  mongoose.model('InfoSubmission', InfoSubmissionSchema)
