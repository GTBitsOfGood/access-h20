import EligibilityQuestionSchema from "../models/EligibilityQuestion";
import mongoDB from "../index";

export async function getEligibilityQuestions() {
    await mongoDB();
    const questions = await EligibilityQuestionSchema.find();
    return questions;
}