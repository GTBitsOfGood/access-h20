import mongoose from 'mongoose'

const { Schema } = mongoose

const NoteSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

export default mongoose.models.Note ?? mongoose.model('Note', NoteSchema)
