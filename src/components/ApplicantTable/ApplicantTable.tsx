import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Announcement, Create } from "@mui/icons-material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Applicant, ApplicantStatus } from "../../types/Applicant";
import classes from "./ApplicantTable.module.css"

// true = utility view & false = AccessH2O view
type Props = {
  view: boolean
}

const applicants: Applicant[] = [
  {
    name: "applicant 1",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "123 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.AwaitingAccessH2OAction,
  },
  {
    name: "applicant 2",
    utilityCompany: "City of San Francisco",
    accountId: uuidv4().toString(),
    propertyAddress: "1234 San Francisco Blvd",
    applied: new Date(),
    status: ApplicantStatus.Completed,
  },
  {
    name: "applicant 3",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "523 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Approved,
  },
  {
    name: "applicant 4",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 5",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 6",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 7",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 8",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 9",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 10",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 11",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 12",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
  {
    name: "applicant 13",
    utilityCompany: "City of Atlanta",
    accountId: uuidv4().toString(),
    propertyAddress: "125 George Burdell Blvd",
    applied: new Date(),
    status: ApplicantStatus.Terminated,
  },
];

/**
 * Paginates an applicant array.
 *
 * @param array the input array
 * @param page the current page (zero indexed)
 * @param rowsPerPage the number of rows to display per page
 */
const paginate = (
  array: Array<Applicant>,
  page: number,
  rowsPerPage: number
) => {
  return array.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
};

const ApplicantTable = ({ view }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      <div className={classes.header}>
        { !view && <div  className={classes.addCustomerContainer}>
          <button className={classes.addCustomerButton}>Add Customer</button>
        </div>}
      </div>
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
              {view && <TableCell align="right">Announcements</TableCell>}
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {paginate(applicants, page, rowsPerPage).map((applicant) => (
              <TableRow key={applicant.accountId}>
                <TableCell align="left">{applicant.name}</TableCell>
                <TableCell align="right">{applicant.utilityCompany}</TableCell>
                <TableCell align="right">{applicant.accountId}</TableCell>
                <TableCell align="right">{applicant.propertyAddress}</TableCell>
                <TableCell align="right">
                  {applicant.applied.toDateString()}
                </TableCell>
                <TableCell align="right">{applicant.status}</TableCell>
                { view && <TableCell align="right">
                  <Tooltip title={"View announcements"}>
                    <IconButton>
                      <Announcement />
                    </IconButton>
                  </Tooltip>
                </TableCell>}
                <TableCell align="right">
                  <Tooltip title={"View Info Submission"}>
                    <IconButton>
                      <Create />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          count={applicants.length}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          page={page}
          onPageChange={(_, page) => setPage(page)}
        />
      </TableContainer>
    </>
  );
};

export default ApplicantTable;
