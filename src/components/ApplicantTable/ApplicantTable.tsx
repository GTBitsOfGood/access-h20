import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ButtonProps } from '@material-ui/core';

function createData(
  name: string,
  id: number,
  status: string,
  info: ButtonProps,
) {
  return { name, id, status, info }; 
}

const rows = [
  createData('Khusbu Patel', 456789456, 'Pending', <button>Info Submission</button>),
  createData('Jason Li', 789456123, 'Pending', <button>Info Submission</button>),
  createData('Cluadia Tiller', 123456789, 'Pending', <button>Info Submission</button>),
  createData('Charlie Luo', 789456321, 'Pending', <button>Info Submission</button>),
];

const ApplicantTable = () => {
    return (
        <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Info Submission</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.info}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}


export default ApplicantTable