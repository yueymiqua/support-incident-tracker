import { useState } from 'react'
import Link from 'next/link'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const incidents = () => {
    // const reports = [
    //     {
    //         subject: 'subject1',
    //         description: 'description1',
    //         username: 'user1',
    //         department: 'HR'
    //     },
    //     {
    //         subject: 'subject2',
    //         description: 'description2',
    //         username: 'user2',
    //         department: 'Admin'
    //     },
    //     {
    //         subject: 'subject3',
    //         description: 'description3',
    //         username: 'user3',
    //         department: 'Finance'
    //     }
    // ]
    
    const createData = (subject, description, username, department) => {
        return { subject, description, username, department };
    }

    const reports = [
        createData('subject1', 'description1', 'username1', 'HR'),
        createData('subject2', 'description2', 'username2', 'Admin'),
        createData('subject3', 'description3', 'username3', 'Finance')
    ]

    const [filterByUser, setFilterByUser] = useState('')

    return (
        <TableContainer component={Paper}>
            <Table className="table" aria-label="incident-table">
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
                            <tableCell align="right">{report.description}</tableCell>
                            <tableCell align="right">{report.username}</tableCell>
                            <tableCell align="right">{report.department}</tableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default incidents