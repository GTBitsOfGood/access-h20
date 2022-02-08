import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isUtilityCompany: {
    type: Boolean,
    required: true
  },
  utilityCompany: {
    type: String,
    required: false
  }
})

export default mongoose.models.User ?? mongoose.model('User', UserSchema)
