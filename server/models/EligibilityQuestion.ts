export interface EligibilityQuestion {
    eligibilityStatuses: {
        id: String,
        title: String,
        question: String,
    };
    documents: {
        id: String,
        title: String,
        description: String,
    };
    otherQuestions: {
        id: String,
        question: String,
    };
}

export var EligibilityStatus = {
    id: String,
    title: String,
    question: String,
    answer: Boolean
}

export var Documents = {
    id: String,
    title: String,
    description: String,
    file: String
}

export var Other = {
    id: String,
    question: String,
    answer: String
}

export var MasterEligibilityStatus = {
    title: String,
    question: String,
}

export var MasterDocuments = {
    title: String,
    description: String,
}

export var MasterOther = {
    question: String,
}