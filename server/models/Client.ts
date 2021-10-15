import { ClientStatus } from "./ClientStatus"
export interface Client {
    name: string;
    utilityCompany: string;
    accountId: string;
    status: ClientStatus;
    address: string;
    notes: [string];
    eligibilityStatuses: string;
    documents: [File];
    otherQuestions: [string];
}