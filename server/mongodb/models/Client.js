import mongoose, { Schema } from 'mongoose'
import { ClientStatus } from '../../models/ClientStatus'
import { EligibilityStatus } from '../../models/EligibilityStatus'

const ClientSchema = new Schema(
  {
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
      enum: ClientStatus,
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
  }
)

export default mongoose.models?.Client ?? mongoose.model('Client', ClientSchema)
