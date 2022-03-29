import mongoose from 'mongoose'

const { Schema } = mongoose

const EligibilityQuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  }
})

export default mongoose.models?.EligibilityQuestion ?? mongoose.model('EligibilityQuestion', EligibilityQuestionSchema)
