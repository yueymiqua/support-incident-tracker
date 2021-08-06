import { useState } from 'react';
import Link from 'next/link';
import Menubar from '../components/menubar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { FormControl, Select, MenuItem, TextareaAutosize, InputLabel } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import IncidentPosts from '../components/incidentPosts';

const Incidents = () => {

    const [reports, setReports] = useState([]);
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const statuses = ['OPEN', 'IN-PROGRESS', 'DONE'];
    const [status, setStatus] = useState('');
    const priorities = ['LOW', 'MEDIUM', 'HIGH'];
    const [priority, setPriority] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSortDirection = (columnName, data) => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        switch(columnName) {
            case 'Description':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.description > b.description) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.description < b.description) ? 1 : -1}))
                }
            break;
            case 'Department':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.department > b.department) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.department < b.department) ? 1 : -1}))
                }
            break;
            case 'Priority':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.priority > b.priority) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.priority < b.priority) ? 1 : -1}))
                }
            break;
            case 'Initiator':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.initiator > b.initiator) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.initiator < b.initiator) ? 1 : -1}))
                }
            break;
            case 'Status':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.status > b.status) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.status < b.status) ? 1 : -1}))
                }
            break;
            case 'Created':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.creation_date > b.creation_date) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.creation_date < b.creation_date) ? 1 : -1}))
                }
            break;
        }
    }
      
    function getModalStyle() {
        return {
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        };
      }

    const useStyles = makeStyles((theme) => ({
        table: {
          minWidth: '650px',
          maxWidth: '1000px'
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
    }));

    const classes = useStyles();

    const body = (
        <div style={modalStyle} >
            <h2 id="simple-modal-title">Description of Incident</h2>
            <FormControl>
                <InputLabel>Select Status</InputLabel>
                <Select 
                    style={{width: '160px'}}
                    labelId="statuses-label"
                    id="statuses"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {statuses.map((stat, index) => 
                        <MenuItem key={index} value={stat}>{stat}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Select Priority</InputLabel>
                <Select 
                    style={{width: '160px'}}
                    labelId="priorities-label"
                    id="priorities"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    {priorities.map((prrty, index) => 
                        <MenuItem key={index} value={prrty}>{prrty}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl>
                <TextareaAutosize minRows={8} style={{ minWidth: '20vw' }} placeholder="Relevant notes"/>
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{ backgroundColor: '#3f50b5', color: '#fff', marginRight: '5px' }} onClick={() => setOpen(false)}>Save</Button>
                <Button style={{ backgroundColor: 'crimson', color: '#fff' }} onClick={() => setOpen(false)}>Close</Button>
            </div>
        </div>
      );

    return (
        <div style={{display: "flex", height: "100%", minHeight: "100vh", justifyContent: "center", background: "lightGray", paddingTop: "10vh" }}>
            <Menubar />
            <div style={{ textAlign: 'center' }}>
                <h1>List of Existing Incidents</h1>
                <IncidentPosts 
                    handleOpen={handleOpen} 
                    handleSortDirection={handleSortDirection} 
                    sortDirection={sortDirection} 
                    reports={reports} 
                    setReports={setReports}/>
                <Modal
                    open={open}
                    onClose={() => handleClose()}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>
                <div style={{ marginTop: '20px', marginBottom: '100px'}}>
                    <Link href="/new-incident"><Button style={{ color: 'ivory', backgroundColor: '#757DE8', marginBottom: '10px' }}>Create New Incident</Button></Link>
                    <br></br>
                    <Link href="/"><Button style={{ color: 'ivory', backgroundColor: '#002984' }}>Back</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Incidents