import { useEffect, useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableSortLabel 
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel, FormControl, FormLabel, FormGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

const incidents = () => {

    const [searchText, setSearchText] = useState('');
    const [hrCheckboxOn, setHrCheckboxOn] = useState(false);
    const [adminCheckboxOn, setAdminCheckboxOn] = useState(false);
    const [financeCheckboxOn, setFinanceCheckboxOn] = useState(false);
    const [engineeringCheckboxOn, setEngineeringCheckboxOn] = useState(false);
    const [sortDirection, setSortDirection] = useState('asc');
    const [reports, setReports] = useState([]);
    const defaultReports = [
        ['login credentials', 'not able to log in', 'Susan', 'HR', 'edit'],
        ['email access', 'missing emails from inbox', 'Tim', 'Admin', 'edit'],
        ['phone', 'unable to recieve calls', 'Courtney', 'Admin', 'edit'],
        ['headset', 'no sound from one ear', 'Richard', 'Admin', 'edit'],
        ['paystubs', 'missing paystubs from 2019', 'Benedict', 'Finance', 'edit'],
        ['monitor', 'screen not displaying image', 'Ellen', 'Engineering', 'edit'],
        ['internet', 'no internet connection', 'Ashley', 'Engineering', 'edit']
    ];
    
    useEffect(() => {
        const createData = (subject, description, username, department, edit) => {
            return [subject, description, username, department, edit];
        }
    
        setReports([
            createData('login credentials', 'not able to log in', 'Susan', 'HR', 'edit'),
            createData('email access', 'missing emails from inbox', 'Tim', 'Admin', 'edit'),
            createData('phone', 'unable to recieve calls', 'Courtney', 'Admin', 'edit'),
            createData('headset', 'no sound from one ear', 'Richard', 'Admin', 'edit'),
            createData('paystubs', 'missing paystubs from 2019', 'Benedict', 'Finance', 'edit'),
            createData('monitor', 'screen not displaying image', 'Ellen', 'Engineering', 'edit'),
            createData('internet', 'no internet connection', 'Ashley', 'Engineering', 'edit')
        ])
    },[])

    useEffect(() => {
        const reportConsistingOfSearchText = []
        console.log(searchText);
        const filterBySearchText = reports.map((report) => {
                if(report.join(' ').includes(searchText)){
                    reportConsistingOfSearchText.push(report)
                }
            })
        if(reportConsistingOfSearchText.length > 0){
            setReports(reportConsistingOfSearchText);
        }
    },[searchText])
    
    const filterByDepartment = (dept) => {
        switch(dept) {
            case 'HR':
                if(hrCheckboxOn === false){
                    const filteredReports = reports.filter(report => report[3] === dept);
                    setReports(filteredReports);
                    setHrCheckboxOn(true)
                } else {
                    setReports(defaultReports);
                    setHrCheckboxOn(false)
                }
            break;
            case 'Admin':
                if(adminCheckboxOn === false){
                    const filteredReports = reports.filter(report => report[3] === dept);
                    setReports(filteredReports);
                    setAdminCheckboxOn(true)
                } else {
                    setReports(defaultReports);
                    setAdminCheckboxOn(false)
                }
            break;
            case 'Finance':
                if(financeCheckboxOn === false){
                    const filteredReports = reports.filter(report => report[3] === dept);
                    setReports(filteredReports);
                    setFinanceCheckboxOn(true)
                } else {
                    setReports(defaultReports);
                    setFinanceCheckboxOn(false)
                }
            break;
            case 'Engineering':
                if(engineeringCheckboxOn === false){
                    const filteredReports = reports.filter(report => report[3] === dept);
                    setReports(filteredReports);
                    setEngineeringCheckboxOn(true)
                } else {
                    setReports(defaultReports);
                    setEngineeringCheckboxOn(false)
                }
            break;
        }
    }

    const handleTextSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleClearSearch = () => {
        setReports(defaultReports)
        setSearchText('')
    }

    const handleSortDirection = (columnName) => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        switch(columnName) {
            case 'Subject':
                if(sortDirection === 'asc'){
                    reports.sort()
                } else {
                    reports.reverse()
                }
            break;
            case 'DetailsOfIncident':
                if(sortDirection === 'asc'){
                    reports.map(report => {
                        report.unshift(report[1])
                    })
                    reports.sort()
                    reports.map(report => {
                        report.shift()
                    })
                } else {
                    reports.map(report => {
                        report.unshift(report[1])
                    })
                    reports.reverse()
                    reports.map(report => {
                        report.shift()
                    })
                }
            break;
            case 'CreatedBy':
                if(sortDirection === 'asc'){
                    reports.map(report => {
                        report.unshift(report[2])
                    })
                    reports.sort()
                    reports.map(report => {
                        report.shift()
                    })
                } else {
                    reports.map(report => {
                        report.unshift(report[2])
                    })
                    reports.reverse()
                    reports.map(report => {
                        report.shift()
                    })
                }
            break;
            case 'RelatedDepartment':
                if(sortDirection === 'asc'){
                    reports.map(report => {
                        report.unshift(report[3])
                    })
                    reports.sort()
                    reports.map(report => {
                        report.shift()
                    })
                } else {
                    reports.map(report => {
                        report.unshift(report[3])
                    })
                    reports.reverse()
                    reports.map(report => {
                        report.shift()
                    })
                }
            break;
        }
    }

    const useStyles = makeStyles({
        table: {
          minWidth: '650px',
          maxWidth: '1000px'
        },
      });

    const classes = useStyles();

    return (
        <div style={{display: "flex", height: "100%", minHeight: "100vh", justifyContent: "center", background: "lightGray", paddingTop: "10vh" }}>
            <div style={{ textAlign: 'center' }}>
                <h1>List of Existing Incidents</h1>
                <FormControl component="fieldset" style={{borderBlockColor: 'black', borderBlockStyle: 'solid', borderBlockWidth: '1px', marginBottom: '10px'}}>
                    <FormLabel component="legend" style={{ color: 'steelblue'}}>Filter Issues By Department</FormLabel>
                    <FormGroup style={{display: 'inline'}}>
                        <FormControlLabel
                            control={<Checkbox name="HR" checked={hrCheckboxOn} onChange={() => filterByDepartment("HR")}/>}
                            label="HR"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Admin" checked={adminCheckboxOn} onChange={() => filterByDepartment("Admin")}/>}
                            label="Admin"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Finance" checked={financeCheckboxOn} onChange={() => filterByDepartment("Finance")}/>}
                            label="Finance"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Engineering" checked={engineeringCheckboxOn} onChange={() => filterByDepartment("Engineering")}/>}
                            label="Engineering"
                        />
                    </FormGroup>
                </FormControl>
                <div className='textfield-container'>
                    <FormControl component="fieldset" style={{width: '250px', marginBottom: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <TextField 
                                style={{ backgroundColor: 'white', minWidth: '250px', borderRadius: '3px' }} 
                                value={searchText} placeholder="Text search for any report column" 
                                onKeyDown={(e) => { if (e.key === 'Backspace'){ setReports(defaultReports), setSearchText(e.target.value) }}} 
                                onChange={(e) => handleTextSearch(e)}/>
                            <Button style={{ color: 'ivory', background: 'blue', marginLeft: '5px' }} onClick={() => handleClearSearch()}>Clear</Button>
                        </div>
                    </FormControl>
                </div>
                <TableContainer component={Paper}>
                    <FormLabel>Columns can be sorted alphabetically</FormLabel>
                    <Table className={classes.styles} aria-label="incident-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Subject<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Subject")}/></TableCell>
                                <TableCell align="right">Details of Incident<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("DetailsOfIncident")}/></TableCell>
                                <TableCell align="right">Created By<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("CreatedBy")}/></TableCell>
                                <TableCell align="right">Related Department<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("RelatedDepartment")}/></TableCell>
                                <TableCell align="center">Edit/Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reports.map((report, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{report[0]}</TableCell>
                                    <TableCell align="center">{report[1]}</TableCell>
                                    <TableCell align="center">{report[2]}</TableCell>
                                    <TableCell align="center">{report[3]}</TableCell>
                                    <TableCell align="center">
                                        <Button><EditIcon style={{color: 'blue'}}/></Button>
                                        <Button><CancelIcon style={{color: 'red'}}/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{marginTop: '20px', marginBottom: '100px'}}>
                    <Link href="/">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default incidents