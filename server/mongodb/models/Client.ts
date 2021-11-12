import mongoose, { Schema } from "mongoose";
import { ClientStatus } from "../../models/ClientStatus";
import { Documents, EligibilityStatus, Other } from "../../models/EligibilityQuestion";

const ClientSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      utilityCompany: {
        type: String,
        required: true,
      },
      accountId: {
        type: String,
        required: true,
        unique: true,
      },
      date: {
        type: Date,
        required: true,
      },
      status: {
        type: ClientStatus,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      notes: {
        type: [String], 
        required: true,
      },
      eligibilityStatuses: {
        type: [EligibilityStatus],
        required: false,
      },
      documents: {
        type: [Documents],
        required: false,
      },
      otherQuestions: {
        type: [Other],
        required: false,
      },
 
    }
  );

  export default mongoose.models.Client ?? mongoose.model("Client", ClientSchema);
