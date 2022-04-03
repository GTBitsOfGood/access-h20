import { ApplicantStatus } from 'src/types/Applicant'
export interface Client {
  name: string
  utilityCompany: string
  accountId: string
  status: ApplicantStatus
  propertyAddress: string
  applied: Date
  phoneNumber: string
}

export interface Status {
  accountId: string
  status: ApplicantStatus
}
