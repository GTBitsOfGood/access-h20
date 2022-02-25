import mongoose from 'mongoose'

const { Schema } = mongoose

const OtherQuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  }
})

export default mongoose.models?.OtherQuestion ?? mongoose.model('OtherQuestion', OtherQuestionSchema)
