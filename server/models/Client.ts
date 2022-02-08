import { ClientStatus } from './ClientStatus'
// import { EligibilityStatus } from './EligibilityStatus'

export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  status: ClientStatus
  address: string
  applied: Date
  notes: [string]
  eligibilityStatuses: {
    question: string
    answer: boolean
  }
  documents: [File]
  otherQuestions: [string]
}
