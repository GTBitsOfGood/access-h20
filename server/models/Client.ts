import { ApplicantStatus } from 'src/types/Applicant'
export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  status: ApplicantStatus
  propertyAddress: string
  applied: Date
  phone: string
  notes: [string]
  eligibilityStatuses: {
    question: string
    answer: boolean
  }
  documents: [String]
  otherQuestions: [string]
}

export interface Status {
  accountId: string
  status: ApplicantStatus
}
