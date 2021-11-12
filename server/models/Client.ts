import { ClientStatus } from "./ClientStatus"
export interface Client {
    name: string;
    utilityCompany: string;
    accountId: string;
    applied: Date;
    status: ClientStatus;
    address: string;
    notes?: string[];
    eligibilityStatuses?: [{
        title: String,
        question: String,
        answer: Boolean
    }];
    documents?:[{
        title: String,
        description: String,
        file: String
    }];
    otherQuestions?: [{
        question: String,
        answer: String
    }];
}