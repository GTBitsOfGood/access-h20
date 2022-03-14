import mongoose, { Schema } from 'mongoose'
import { ClientStatus } from '../../models/ClientStatus'
import { EligibilityStatus } from '../../models/EligibilityStatus'
// import { v4 as uuidv4 } from 'uuid'

const ClientSchema = new Schema(
  {
    accountId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: true
    },
    utilityCompany: {
      type: String,
      required: true
    },
    status: {
      type: ClientStatus,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    applied: {
      type: Date,
      default: new Date(),
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
    // documents: {
    //   type: [File],
    //   required: false
    // },
    otherQuestions: {
      type: [String],
      required: false
    }
  }
)

export default mongoose.models.Client ?? mongoose.model('Client', ClientSchema)
