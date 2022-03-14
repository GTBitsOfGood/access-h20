import mongoose, { Schema } from 'mongoose'
import { ClientStatus } from '../../models/ClientStatus'
import { EligibilityStatus } from '../../models/EligibilityStatus'
import { ObjectId } from 'mongodb'

const ClientSchema = new Schema({
  utilityCompanyId: {
    type: ObjectId,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  utilityCompany: {
    type: String,
    required: false
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
})

export default mongoose.models.Client ?? mongoose.model('Client', ClientSchema)
