import mongoose from 'mongoose'

const { Schema } = mongoose

const DocumentQuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

export default mongoose.models?.DocumentQuestion ?? mongoose.model('DocumentQuestion', DocumentQuestionSchema)
