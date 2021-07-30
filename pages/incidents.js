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
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel, FormControl, FormLabel, FormGroup } from '@material-ui/core'

const incidents = () => {
    
    const createData = (subject, description, username, department, edit) => {
        return { subject, description, username, department, edit };
    }

    const reports = [
        createData('login credentials', 'not able to log in', 'Susan', 'HR', 'edit'),
        createData('email access', 'missing emails from inbox', 'Tim', 'Admin', 'edit'),
        createData('paystubs', 'missing paystubs from 2019', 'Benedict', 'Finance', 'edit'),
        createData('monitor', 'screen not displaying image', 'Ellen', 'Engineering', 'edit')

    ]

    const [filterByUser, setFilterByUser] = useState('')

    // const useStyles = makeStyles({
    //     table: {
    //       minWidth: '650px',
    //       maxWidth: '1000px'
    //     },
    //   });

    // const classes = useStyles();

    return (
        <div style={{display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", paddingTop: "10vh" }}>
            <div style={{ textAlign: 'center' }}>
                <h1>List of Existing Incidents</h1>
                <FormControl component="fieldset" style={{borderBlockColor: 'black', borderBlockStyle: 'solid', borderBlockWidth: '1px'}}>
                    <FormLabel component="legend">Sort Issues By Department</FormLabel>
                    <FormGroup style={{display: 'inline'}}>
                        <FormControlLabel
                            control={<Checkbox name="HR" />}
                            label="HR"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Admin" />}
                            label="Admin"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Finance" />}
                            label="Finance"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Engineering" />}
                            label="Engineering"
                        />
                    </FormGroup>
                </FormControl>
                <TableContainer component={Paper}>
                    <Table aria-label="incident-table" style={{minWidth: '650px', maxWidth: '1000px'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Subject</TableCell>
                                <TableCell align="right">Details of Incident</TableCell>
                                <TableCell align="right">Created By</TableCell>
                                <TableCell align="right">Related Department</TableCell>
                                <TableCell align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reports.map((report, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{report.subject}</TableCell>
                                    <TableCell align="right">{report.description}</TableCell>
                                    <TableCell align="right">{report.username}</TableCell>
                                    <TableCell align="right">{report.department}</TableCell>
                                    <TableCell align="right">
                                        <Button style={{color: 'blue'}}>{report.edit}</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Link href="/">Back</Link>
            </div>
        </div>
    )
}

export default incidents