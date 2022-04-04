import mongoose, { Schema } from 'mongoose'
import { ApplicantStatus } from 'src/types/Applicant'
import { ObjectId } from 'mongodb'

const ClientSchema = new Schema({
  accountId: {
    type: String,
    required: true,
    unique: true
  },
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
    required: true
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
    required: false
  }
})

export default mongoose.models.Client ?? mongoose.model('Client', ClientSchema)
