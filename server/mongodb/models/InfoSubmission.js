import mongoose, { Schema } from 'mongoose'

const InfoSubmissionSchema = new Schema({
  accountId: {
    type: String,
    required: true
  },
  paymentAns: {
    type: Boolean,
    required: true
  },
  servicesAns: {
    type: Boolean,
    required: true
  },
  contactAns: {
    type: Boolean,
    required: true
  },
  waterAns: {
    type: Boolean,
    required: true
  },
  adjustAns: {
    type: String,
    required: true
  },
  infoAns: {
    type: String,
    required: true
  },
  indivAns: {
    type: String,
    required: true
  }
})

export default mongoose.models?.InfoSubmission ??
  mongoose.model('InfoSubmission', InfoSubmissionSchema)
