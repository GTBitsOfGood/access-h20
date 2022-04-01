import mongoose, { Schema } from 'mongoose'
import { ClientStatus } from '../../models/ClientStatus'
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
    required: true
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
  }
})

export default mongoose.models?.Client ?? mongoose.model('Client', ClientSchema)
