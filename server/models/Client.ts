import { ClientStatus } from './ClientStatus'
export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  status: ClientStatus
  propertyAddress: string
  applied: Date
  notes: [string]
  eligibilityStatuses: {
    question: string
    answer: boolean
  }
  documents: [String]
  otherQuestions: [string]
}
