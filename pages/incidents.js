import { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const incidents = () => {
    
    const createData = (subject, description, username, department) => {
        return { subject, description, username, department };
    }

    const reports = [
        createData('subject1', 'description1', 'username1', 'HR'),
        createData('subject2', 'description2', 'username2', 'Admin'),
        createData('subject3', 'description3', 'username3', 'Finance')
    ]

    const [filterByUser, setFilterByUser] = useState('')

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="incident-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell align="right">Details of Incident</TableCell>
                        <TableCell align="right">Created By</TableCell>
                        <TableCell align="right">Related Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.map((report, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{report.subject}</TableCell>
                            <TableCell align="right">{report.description}</TableCell>
                            <TableCell align="right">{report.username}</TableCell>
                            <TableCell align="right">{report.department}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default incidents