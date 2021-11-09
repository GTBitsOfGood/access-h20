export interface EligibilityQuestion {
    eligibilityStatuses: [{
        title: String,
        question: String,
    }];
    documents:[{
        title: String,
        description: String,
    }];
    otherQuestions:  [{
        question: String,
    }];
}