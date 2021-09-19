import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import CreateIcon from "@mui/icons-material/Create";

enum ApplicantStatus {
  AwaitingUtilityAction = "Awaiting Utility Action",
  AwaitingAccessH2OAction = "Awaiting AccessH2O Action",
  Approved = "Approved",
  Completed = "Completed",
  Denied = "Denied",
  Terminated = "Terminated",
}

type Applicant = {
  name: string;
  utilityCompany: string;
  accountId: string;
  propertyAddress: string;
  applied: Date;
  status: ApplicantStatus;
};

const applicants: Applicant[] = [
  {
    name: "Khusbu Patel",
    utilityCompany: "City of Atlanta",
    accountId: "1234567890",
    propertyAddress: "123 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.AwaitingAccessH2OAction,
  },
  {
    name: "Jason Li",
    utilityCompany: "City of San Francisco",
    accountId: "2345678901",
    propertyAddress: "1234 San Francisco Blvd",
    applied: new Date(),
    status: ApplicantStatus.Completed,
  },
  {
    name: "Claudia Tiller",
    utilityCompany: "City of Atlanta",
    accountId: "3456789012",
    propertyAddress: "523 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Approved,
  },
  {
    name: "Charlie Luo",
    utilityCompany: "City of Atlanta",
    accountId: "4567890123",
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
];

const ApplicantTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Utility Company</TableCell>
            <TableCell align="right">Account ID</TableCell>
            <TableCell align="right">Property Address</TableCell>
            <TableCell align="right">Applied</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow key={applicant.accountId}>
              <TableCell align="left">{applicant.name}</TableCell>
              <TableCell align="right">{applicant.utilityCompany}</TableCell>
              <TableCell align="right">{applicant.accountId}</TableCell>
              <TableCell align="right">{applicant.propertyAddress}</TableCell>
              <TableCell align="right">
                {applicant.applied.toDateString()}
              </TableCell>
              <TableCell align="right">{applicant.status}</TableCell>
              <TableCell align={"right"}>
                <Button variant={"outlined"}>
                  <CreateIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicantTable;
