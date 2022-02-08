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
      type: ClientStatus,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    notes: {
      type: [String],
      required: true
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

export default mongoose.models.Client ?? mongoose.model('Client', ClientSchema)
