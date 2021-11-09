export enum ApplicantStatus {
  Incomplete = 'Incomplete',
  AwaitingUtility = 'Awaiting Utility',
  AwaitingAccessH2O = 'Awaiting AccessH2O',
  Approved = 'Approved',
  Completed = 'Completed',
  Denied = 'Denied',
  Terminated = 'Terminated',
}

export const ApplicantStatusColor: { [key in ApplicantStatus]: string } = {
  [ApplicantStatus.Approved]: '#BEF2BD',
  [ApplicantStatus.AwaitingAccessH2O]: '#BDECF2',
  [ApplicantStatus.AwaitingUtility]: '#F2E3BD',
  [ApplicantStatus.Completed]: '#D4BDF2',
  [ApplicantStatus.Denied]: '#F2BDBD',
  [ApplicantStatus.Terminated]: '#C5C7CA',
  [ApplicantStatus.Incomplete]: '#FFB75F' // TODO: determine proper color for incomplete
}

export interface Applicant {
  name: string;
  utilityCompany: string;
  accountId: string;
  applied: Date;
  status: ApplicantStatus;
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
  otherQuestions?:  [{
      question: String,
      answer: String
  }];
}
