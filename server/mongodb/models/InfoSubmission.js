import mongoose, { Schema } from 'mongoose'
import { eligibilityQA } from 'server/models/EligibilityQuestion'
import { documentQA } from 'server/models/DocumentQuestion'
import { otherQA } from 'server/models/OtherQuestion'

const InfoSubmissionSchema = new Schema({
  accountId: {
    type: String,
    required: true
  },
  eligibilityQuestions: {
    type: [eligibilityQA],
    required: false
  },
  documents: {
    type: [documentQA],
    required: false
  },
  otherQuestions: {
    type: [otherQA],
    required: false
  }
})

export default mongoose.models?.InfoSubmission ??
  mongoose.model('InfoSubmission', InfoSubmissionSchema)
