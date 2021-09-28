import mongoose from "mongoose";
import { UserRoles } from "./UserRoles";

export interface UserType {
  email: string;
  password: string;
  role: string;
}

const { Schema } = mongoose;
const UserSchema = new Schema<UserType>({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserRoles),
    default: UserRoles.ACCESS_H20,
  },
});

export default mongoose.models.User ?? mongoose.model("User", UserSchema);
