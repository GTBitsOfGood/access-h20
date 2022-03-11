import mongoose, { Schema } from 'mongoose'
import { EligibilityStatus } from '../../models/EligibilityStatus'
import { ApplicantStatus } from 'src/types/Applicant'

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  utilityCompany: {
    type: String,
    required: true
  },
  accountId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ApplicantStatus,
    required: true
  },
  propertyAddress: {
    type: String,
    required: true
  },
  applied: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  notes: {
    type: [String],
    required: false
  },
  eligibilityStatuses: {
    type: EligibilityStatus,
    required: false
  },
  documents: {
    type: [String],
    required: false
  },
  otherQuestions: {
    type: [String],
    required: false
  }
})

export default mongoose.models?.Client ?? mongoose.model('Client', ClientSchema)
