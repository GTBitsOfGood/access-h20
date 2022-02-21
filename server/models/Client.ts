import { ClientStatus } from './ClientStatus'
export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  status: ClientStatus
  address: string
  notes: [string]
  eligibilityStatuses: {
    question: String
    answer: Boolean
  }
  documents: [String]
  otherQuestions: [string]
}
