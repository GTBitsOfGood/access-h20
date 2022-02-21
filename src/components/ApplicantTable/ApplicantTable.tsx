import React, { useEffect, useState } from 'react'
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
  TextField,
  MenuItem,
  InputAdornment, Menu
} from '@mui/material'
import Link from 'next/link'
import { Announcement, MoreVert } from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid'
import { Applicant, ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { ApplicantModal } from 'src/components/ApplicantModal/ApplicantModal'
import { CompanyModal } from 'src/components/CompanyModal/CompanyModal'
import classes from './ApplicantTable.module.css'
import { NotesModal } from '../NotesModal/NotesModal'

interface PropTypes {
  isUtilityView: boolean // true = utility view & false = AccessH2O view
  infoSubmissionEndpoint: string
}

const applicants: Applicant[] = [
  {
    name: 'applicant 1',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '123 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.AwaitingAccessH2O
  },
  {
    name: 'applicant 2',
    utilityCompany: 'City of San Francisco',
    accountId: uuidv4().toString(),
    propertyAddress: '1234 San Francisco Blvd',
    applied: new Date(),
    status: ApplicantStatus.Completed
  },
  {
    name: 'applicant 3',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '523 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Approved
  },
  {
    name: 'applicant 4',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 5',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.AwaitingUtility
  },
  {
    name: 'applicant 6',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Denied
  },
  {
    name: 'applicant 7',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 8',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 9',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 10',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 11',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 12',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  },
  {
    name: 'applicant 13',
    utilityCompany: 'City of Atlanta',
    accountId: uuidv4().toString(),
    propertyAddress: '125 George Burdell Blvd',
    applied: new Date(),
    status: ApplicantStatus.Terminated
  }
]

/**
 * Paginates an applicant array.
 *
 * @param array the input array
 * @param page the current page (zero indexed)
 * @param rowsPerPage the number of rows to display per page
 */
const paginate = (
  array: Applicant[],
  page: number,
  rowsPerPage: number
): Applicant[] => {
  return array.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
}

const ApplicantTable = ({
  isUtilityView,
  infoSubmissionEndpoint
}: PropTypes): JSX.Element => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Any')
  const [searchBy, setSearchBy] = useState('All')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [filteredApplicants, setfilteredApplicants] = useState(applicants)

  useEffect(() => {
    const statusApplicants = applicants.filter(
      (applicant) => statusFilter === 'Any' || applicant.status === statusFilter
    )
    let dateApplicants = statusApplicants
    if ((fromDate !== '') && (toDate !== '')) {
      console.log('wassup')
      dateApplicants = dateApplicants.filter((applicant) => {
        const applicantDate = new Date(applicant.applied)
        return (
          applicantDate > new Date(fromDate) && applicantDate < new Date(toDate)
        )
      })
    }
    let searchedApplicants = dateApplicants
    const caseInsensitiveSearch = search.toLowerCase()
    if (searchBy === 'All') {
      searchedApplicants = searchedApplicants.filter(
        (applicant) =>
          applicant.name.toLowerCase().includes(caseInsensitiveSearch) ||
          applicant.utilityCompany
            .toLowerCase()
            .includes(caseInsensitiveSearch)
      )
    } else if (searchBy === 'Name') {
      searchedApplicants = searchedApplicants.filter(
        (applicant) =>
          applicant.name.toLowerCase().includes(caseInsensitiveSearch)
      )
    } else if (searchBy === 'Utility Company') {
      searchedApplicants = searchedApplicants.filter(
        (applicant) =>
          applicant.utilityCompany
            .toLowerCase()
            .includes(caseInsensitiveSearch)
      )
    }

    setfilteredApplicants(searchedApplicants)
  }, [search, statusFilter, searchBy, fromDate, toDate])

  const [showApplicantModal, setShowApplicantModal] = useState(false)
  const [showCompanyModal, setShowCompanyModal] = useState(false)
  const [showNotesModal, setShowNotesModal] = useState(false)

  const statusColor = (status: ApplicantStatus): string => {
    return ApplicantStatusColor[status]
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.searchBar}>
          <TextField
            className={classes.searchBox}
            InputProps={{
              className: classes.searchBox
            }}
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TextField
            className={classes.searchFilter}
            InputProps={{
              disableUnderline: true,
              className: classes.searchFilterText
            }}
            label="Search By"
            select
            variant="standard"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <MenuItem key={'All'} value={'All'}>
              {'All'}
            </MenuItem>
            <MenuItem key={'Utility Company'} value={'Utility Company'}>
              {'Utility Company'}
            </MenuItem>
            <MenuItem key={'Name'} value={'Name'}>
              {'Name'}
            </MenuItem>
          </TextField>
          <TextField
            className={classes.searchFilter}
            InputProps={{
              disableUnderline: true,
              className: classes.searchFilterText
            }}
            label="Status"
            select
            variant="standard"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem key={'Any'} value={'Any'}>
              {'Any'}
            </MenuItem>
            {Object.values(ApplicantStatus).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.dateInput}
            variant="outlined"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">From:</InputAdornment>
              ),
              className: classes.dateInputText
            }}
          />
          <TextField
            className={classes.dateInput}
            variant="outlined"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            type="date"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">To:</InputAdornment>
              ),
              className: classes.dateInputText
            }}
          />
        </div>
        {!isUtilityView && (
          <div>
            <button onClick={() => setShowApplicantModal(true)} className={classes.addCustomerButton}>Add Customer</button>
            <ApplicantModal shouldShowModal={showApplicantModal} onClose={() => setShowApplicantModal(false)} />

            <button onClick={() => setShowCompanyModal(true)} className={classes.addCustomerButton}>Add Company</button>
            <CompanyModal shouldShowModal={showCompanyModal} onClose={() => setShowCompanyModal(false)} />
          </div>
        )}
      </div>

      <TableContainer>
        <Table>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.tableHeaderText}>Name</TableCell>
              <TableCell className={classes.tableHeaderText}>Utility Company</TableCell>
              <TableCell className={classes.tableHeaderText}>Account ID</TableCell>
              <TableCell className={classes.tableHeaderText}>Property Address</TableCell>
              <TableCell className={classes.tableHeaderText}>Applied</TableCell>
              <TableCell className={classes.tableHeaderText}>Status</TableCell>
              <TableCell className={classes.tableHeaderText}>Notes</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {
              paginate(filteredApplicants, page, rowsPerPage).map(
                (applicant) => {
                  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)
                  const open = Boolean(anchorEl)
                  const handleClick = (event: React.MouseEvent): void => {
                    setAnchorEl(event.currentTarget)
                  }
                  const handleClose = (): void => {
                    setAnchorEl(null)
                  }

                  return (
                      <TableRow key={applicant.accountId}>
                        <Link
                          href={
                            infoSubmissionEndpoint + '/' + applicant.accountId
                          }
                        >
                          <TableCell className={classes.cell}>
                              {applicant.name}
                          </TableCell>
                        </Link>
                        <TableCell className={classes.cell}>{applicant.utilityCompany}</TableCell>
                        <TableCell className={classes.cell}>{applicant.accountId}</TableCell>
                        <TableCell className={classes.cell}>
                          {applicant.propertyAddress}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {applicant.applied.toDateString()}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          <span className={classes.status} style={{ backgroundColor: statusColor(applicant.status) }}>
                            {applicant.status}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                        <Tooltip title={'View notes'}>
                          <IconButton
                            onClick={() => setShowNotesModal(true)}
                          >
                            <Announcement/>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          id="basic-button"
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          <MoreVert/>
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button'
                          }}
                        >
                          <MenuItem onClick={handleClose}>View</MenuItem>
                          <MenuItem onClick={() => setShowNotesModal(true)}>Add Notes</MenuItem>
                          <MenuItem onClick={handleClose}>Change Status</MenuItem>
                          <div className={classes.deleteButton}>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                          </div>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  )
                }
              )
            }
          </TableBody>
        </Table>
        <NotesModal shouldShowModal={showNotesModal} onClose={() => setShowNotesModal(false)} />
        <TablePagination
          count={applicants.length}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          page={page}
          onPageChange={(_, page) => setPage(page)}
        />
      </TableContainer>
    </div>
  )
}

export default ApplicantTable
