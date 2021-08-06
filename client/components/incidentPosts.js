import { useQuery } from '@apollo/client';
import { GET_INCIDENTS } from '../graphql/queries';
import { useState } from 'react';
import SearchBar from './searchBar';
import FilterCheckboxes from './filterCheckboxes';
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
import EditIcon from '@material-ui/icons/Edit';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const IncidentPosts = ({ handleOpen, handleSortDirection, sortDirection, reports, setReports }) => {

    const { loading, error, data } = useQuery(GET_INCIDENTS);
    const [searchText, setSearchText] = useState('');
    const [hrCheckboxOn, setHrCheckboxOn] = useState(true);
    const [adminCheckboxOn, setAdminCheckboxOn] = useState(true);
    const [financeCheckboxOn, setFinanceCheckboxOn] = useState(true);

    if(loading){
        return "loading"
    }

    if(error){
        return "error"
    }

    const filterByDepartment = (dept) => {
        switch(dept) {
            case 'HR':
                if(hrCheckboxOn === true){
                    const filteredReports = reports.filter(report => report[1] !== dept);
                    setReports(filteredReports);
                    setHrCheckboxOn(false)
                } else {
                    const filteredReports = data.incidents.filter(report => report[1] === dept);
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
                    const filteredReports = data.incidents.filter(report => report[1] === dept);
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
                    const filteredReports = data.incidents.filter(report => report[1] === dept);
                    setReports(reports.concat(filteredReports));
                    setFinanceCheckboxOn(true)
                }
            break;
        }
    }

    const handleTextSearch = (e) => {
        setSearchText(e.target.value)
        setReports(data.incidents);
        console.log(e.target.value)
        const reportConsistingOfSearchText = []
        const filterBySearchText = reports.map((report) => {
                if(Object.values(report).join(" ").includes(searchText)){
                    reportConsistingOfSearchText.push(report)
                }
            })
        if(reportConsistingOfSearchText.length > 0){
            setReports(reportConsistingOfSearchText);
        }
    }

    const handleBackspaceKey = (e) => {
        setReports(data.incidents)
        setSearchText(e.target.value)
    }

    const handleClearSearch = () => {
        setReports(data.incidents)
        setSearchText('')
    }

    return (
        <div>
            <FilterCheckboxes 
                filterByDepartment={filterByDepartment} 
                hrCheckboxOn={hrCheckboxOn} 
                adminCheckboxOn={adminCheckboxOn} 
                financeCheckboxOn={financeCheckboxOn}
            />
            <SearchBar 
                handleTextSearch={handleTextSearch} 
                handleBackspaceKey={handleBackspaceKey} 
                handleClearSearch={handleClearSearch} 
                searchText={searchText} 
            />
            <TableContainer component={Paper}>
                <FormLabel style={{ color: '#002984' }}>Columns can be sorted alphabetically</FormLabel>
                <Table  aria-label="incident-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Description", data)}/></TableCell>
                            <TableCell align="right">Department<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Department", data)}/></TableCell>
                            <TableCell align="right">Priority<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Priority", data)}/></TableCell>
                            <TableCell align="right">Initiator<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Initiator", data)}/></TableCell>
                            <TableCell align="right">Status<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Status", data)}/></TableCell>
                            <TableCell align="right">Created<TableSortLabel direction={sortDirection} onClick={() => handleSortDirection("Created", data)}/></TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    {reports.length > 0
                    ? <TableBody>
                    {reports.map((report, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{report.description}</TableCell>
                            <TableCell align="center">{report.department}</TableCell>
                            <TableCell align="center">{report.priority}</TableCell>
                            <TableCell align="center">{report.initiator}</TableCell>
                            <TableCell align="center">{report.status}</TableCell>
                            <TableCell align="center">{report.creation_date}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleOpen()}><EditIcon style={{color: 'blue'}}/></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody> 
                    : <TableBody>
                    {data.incidents.map((incident, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{incident.description}</TableCell>
                            <TableCell align="center">{incident.department}</TableCell>
                            <TableCell align="center">{incident.priority}</TableCell>
                            <TableCell align="center">{incident.initiator}</TableCell>
                            <TableCell align="center">{incident.status}</TableCell>
                            <TableCell align="center">{incident.creation_date}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleOpen()}><EditIcon style={{color: 'blue'}}/></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody> 
                    }
                </Table>
            </TableContainer>
        </div>
    )
}

export default IncidentPosts;