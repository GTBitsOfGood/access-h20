import mongoose, { Schema } from "mongoose";
import { MasterDocuments, MasterEligibilityStatus, MasterOther } from "../../models/InfoSubmissionQuestions";

const EligibilityQuestionSchema = new Schema(
    {
      eligibilityStatuses: {
        type: [MasterEligibilityStatus],
        required: true,
      },
      documents: {
        type: [MasterDocuments],
        required: true,
      },
      otherQuestions: {
        type: [MasterOther],
        required: true,
      },
 
    }
  );

  export default mongoose.models.EligibilityQuestion ?? mongoose.model("EligibilityQuestion", EligibilityQuestionSchema);
