export enum ApplicantStatus {
  Incomplete = "Incomplete",
  AwaitingUtility = "Awaiting Utility",
  AwaitingAccessH2O = "Awaiting AccessH2O",
  Approved = "Approved",
  Completed = "Completed",
  Denied = "Denied",
  Terminated = "Terminated",
}

export type Applicant = {
  name: string;
  utilityCompany: string;
  accountId: string;
  propertyAddress: string;
  applied: Date;
  status: ApplicantStatus;
};
