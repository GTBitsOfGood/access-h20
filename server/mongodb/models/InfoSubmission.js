import mongoose, { Schema } from 'mongoose'

const InfoSubmissionSchema = new Schema ({
  paymentAns : {
      type: String,
      required: true
  },
  servicesAns : {
      type: String,
      required: true
  },
  contactAns : {
      type: String,
      required: true
  },
  waterAns : {
      type: String,
      required: true
  },
  adjustAns : {
      type: String,
      required: true
  },
  infoAns : {
      type: String,
      required: true
  },
  indivAns : {
      type: String,
      required: true
  },
  documents: {
      type: [String],
      required: false
    }
})

export default mongoose.models?.InfoSubmission?? mongoose.model('InfoSubmission', InfoSubmissionSchema)