import { useEffect, useState } from 'react';
import Link from 'next/link';
import Menubar from '../components/menubar';
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
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

const incidents = () => {

    const [searchText, setSearchText] = useState('');
    const [hrCheckboxOn, setHrCheckboxOn] = useState(true);
    const [adminCheckboxOn, setAdminCheckboxOn] = useState(true);
    const [financeCheckboxOn, setFinanceCheckboxOn] = useState(true);
    const [sortDirection, setSortDirection] = useState('asc');
    const [reports, setReports] = useState([]);
    const defaultReports = [
        ['not able to log in', 'HR', 'HIGH', 'Susan', 'OPEN', '109238049', '109238049', 'resolver', ''],
        ['missing emails from inbox', 'HR', 'MEDIUM', 'Tim', 'DONE', '823749827', '183749283', 'resolver', 'internet back on'],
        ['unable to recieve calls', 'Admin', 'MEDIUM', 'Courtney', 'IN-PROGRESS', '193849834', '398410343', 'resolver', 'contacting phone company'], ,
        ['no sound from one ear', 'Admin', 'LOW', 'Richard', 'OPEN', '283405949', '203894759', 'resolver', ''], ,
        ['missing paystubs from 2019', 'Finance', 'LOW', 'Benedict', 'DONE', '103948394', '993848283', 'resolver', 'resent paystubs'], ,
        ['screen not displaying image', 'Finance', 'HIGH', 'Ellen', 'IN-PROGRESS', '483985483', '193948584', 'resolver', 'purchasing new screen'], ,
        ['no internet connection', 'Finance', 'HIGH', 'Ashley', 'IN-PROGRESS', '129398282', '594859384', 'resolver', 'restarting router/modem']
    ];
    
    useEffect(() => {
        const createData = (description, department, priority, initiator, status, crtn_dt, uptd_dt, resolver, resolver_comments) => {
            return [description, department, priority, initiator, status, crtn_dt, uptd_dt, resolver, resolver_comments];
        }
    
        setReports([
            createData('not able to log in', 'HR', 'HIGH', 'Susan', 'OPEN', '109238049', '109238049', 'resolver', ''),
            createData('missing emails from inbox', 'HR', 'MEDIUM', 'Tim', 'DONE', '823749827', '183749283', 'resolver', 'internet back on'),
            createData('unable to recieve calls', 'Admin', 'MEDIUM', 'Courtney', 'IN-PROGRESS', '193849834', '398410343', 'resolver', 'contacting phone company'),
            createData('no sound from one ear', 'Admin', 'LOW', 'Richard', 'OPEN', '283405949', '203894759', 'resolver', ''),
            createData('missing paystubs from 2019', 'Finance', 'LOW', 'Benedict', 'DONE', '103948394', '993848283', 'resolver', 'resent paystubs'),
            createData('screen not displaying image', 'Finance', 'HIGH', 'Ellen', 'IN-PROGRESS', '483985483', '193948584', 'resolver', 'purchasing new screen'),
            createData('no internet connection', 'Finance', 'HIGH', 'Ashley', 'IN-PROGRESS', '129398282', '594859384', 'resolver', 'restarting router/modem')
        ])
    },[])

    useEffect(() => {
        const reportConsistingOfSearchText = []
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
                if(hrCheckboxOn === true){
                    const filteredReports = reports.filter(report => report[1] !== dept);
                    setReports(filteredReports);
                    setHrCheckboxOn(false)
                } else {
                    const filteredReports = defaultReports.filter(report => report[1] === dept);
                    setReports(reports.concat(filteredReports));
                    setHrCheckboxOn(true)
                }
            break;
            case 'Admin':
                if(adminCheckboxOn === true){
                    const filteredReports = reports.filter(report => report[1] !== dept);
                    setReports(filteredReports);
                    setAdminCheckboxOn(false)
                } else {
                    const filteredReports = defaultReports.filter(report => report[1] === dept);
                    setReports(reports.concat(filteredReports));
                    setAdminCheckboxOn(true)
                }
            break;
            case 'Finance':
                if(financeCheckboxOn === true){
                    const filteredReports = reports.filter(report => report[1] !== dept);
                    setReports(filteredReports);
                    setFinanceCheckboxOn(false)
                } else {
                    const filteredReports = defaultReports.filter(report => report[1] === dept);
                    setReports(reports.concat(filteredReports));
                    setFinanceCheckboxOn(true)
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
            case 'Description':
                if(sortDirection === 'asc'){
                    reports.sort()
                } else {
                    reports.reverse()
                }
            break;
            case 'Department':
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
            case 'Priority':
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
            case 'Initiator':
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
            case 'Status':
                if(sortDirection === 'asc'){
                    reports.map(report => {
                        report.unshift(report[4])
                    })
                    reports.sort()
                    reports.map(report => {
                        report.shift()
                    })
                } else {
                    reports.map(report => {
                        report.unshift(report[4])
                    })
                    reports.reverse()
                    reports.map(report => {
                        report.shift()
                    })
                }
            break;
            case 'Created':
                if(sortDirection === 'asc'){
                    reports.map(report => {
                        report.unshift(report[5])
                    })
                    reports.sort()
                    reports.map(report => {
                        report.shift()
                    })
                } else {
                    reports.map(report => {
                        report.unshift(report[5])
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
            <Menubar />
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
                    </FormGroup>
                </FormControl>
                <div className='textfield-container'>
                    <FormControl component="fieldset" style={{width: '250px', marginBottom: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <TextField 
                                style={{ backgroundColor: 'ivory', minWidth: '250px', borderRadius: '3px' }} 
                                value={searchText} placeholder="Text search for any column" 
                                onKeyDown={(e) => { if (e.key === 'Backspace'){ setReports(defaultReports), setSearchText(e.target.value) }}} 
                                onChange={(e) => handleTextSearch(e)}/>
                            <Button style={{ color: 'ivory', background: 'steelblue', marginLeft: '5px' }} onClick={() => handleClearSearch()}>Clear</Button>
                        </div>
                    </FormControl>
                </div>
                <TableContainer component={Paper}>
                    <FormLabel style={{ color: 'steelblue' }}>Columns can be sorted alphabetically</FormLabel>
                    <Table className={classes.styles} aria-label="incident-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Description<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Description")}/></TableCell>
                                <TableCell align="right">Department<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Department")}/></TableCell>
                                <TableCell align="right">Priority<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Priority")}/></TableCell>
                                <TableCell align="right">Initiator<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Initiator")}/></TableCell>
                                <TableCell align="right">Status<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Status")}/></TableCell>
                                <TableCell align="right">Created<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Created")}/></TableCell>
                                <TableCell align="center">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reports.map((report, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{report[0]}</TableCell>
                                    <TableCell align="center">{report[1]}</TableCell>
                                    <TableCell align="center">{report[2]}</TableCell>
                                    <TableCell align="center">{report[3]}</TableCell>
                                    <TableCell align="center">{report[4]}</TableCell>
                                    <TableCell align="center">{report[5]}</TableCell>
                                    <TableCell align="center">
                                        <Button><EditIcon style={{color: 'blue'}}/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ marginTop: '20px', marginBottom: '100px'}}>
                    <Link href="/new-incident"><Button style={{ color: 'ivory', backgroundColor: 'steelblue', marginBottom: '10px' }}>Create New Incident</Button></Link>
                    <br></br>
                    <Link href="/"><Button style={{ color: 'ivory', backgroundColor: 'purple' }}>Back</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default incidents