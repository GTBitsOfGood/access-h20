import { ApplicantStatus } from '../../src/types/Applicant'

export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  applied: Date
  status: ApplicantStatus
  address: string
  notes?: string[]
  eligibilityStatuses?: [{
    id: string
    title: string
    question: string
    answer: boolean
  }]
  documents?: [{
    id: string
    title: string
    description: string
    file: string
  }]
  otherQuestions?: [{
    id: string
    question: string
    answer: string
  }]
}
