import { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { UPDATE_INCIDENT } from '../graphql/mutations';
import { GET_ALL_INCIDENTS } from '../graphql/queries';
import Menubar from '../components/menubar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { FormControl, Select, MenuItem, TextareaAutosize, InputLabel } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import IncidentPosts from '../components/incidentPosts';
import Login from '../components/login';

const Incidents = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [currentUsername, setCurrentUsername] = useState('');
    const [reports, setReports] = useState([]);
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const statuses = ['OPEN', 'IN-PROGRESS', 'DONE'];
    const resolvers = ['Pierre', 'KP'];
    const [updatedDate, setUpdatedDate] = useState('');
    const [currentIncidentId, setCurrentIncidentId] = useState('');
    const [currentResolverComments, setCurrentResolverComments] = useState('')
    const [currentStatus, setCurrentStatus] = useState('');
    const [currentResolver, setCurrentResolver] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [updateIncident, updatedIncident] = useMutation(UPDATE_INCIDENT, { 
        refetchQueries: [{ 
            query: GET_ALL_INCIDENTS 
        }] 
    });

    const onSubmit = () => {
        updateIncident({
            variables: { 
                incidentId: currentIncidentId, 
                status: currentStatus, 
                updated_date: updatedDate, 
                resolver: currentResolver, 
                resolver_comments: currentResolverComments
            }
        })
        setOpen(false);
    }

    const submit = e => {
        e.preventDefault()
        onSubmit({currentStatus, updatedDate, currentResolver, currentResolverComments})
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (incidentId, status, resolver, resolver_comments) => {
        setCurrentIncidentId(incidentId)
        setCurrentStatus(status)
        setCurrentResolver(resolver)
        setCurrentResolverComments(resolver_comments)
        setOpen(true);
        setUpdatedDate(() => {
            const today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1; 
            let yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 
            if(mm<10) 
            {
                mm='0'+mm;
            } 
            return (mm+'-'+dd+'-'+yyyy).toString();
        })
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
            case 'Updated':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.updated_date > b.updated_date) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.updated_date < b.updated_date) ? 1 : -1}))
                }
            break;
            case 'Resolver':
                if(sortDirection === 'asc'){
                    setReports(data.incidents.slice().sort((a, b) => {return (a.resolver > b.resolver) ? 1 : -1}))
                } else {
                    setReports(data.incidents.slice().sort((a, b) => {return (a.resolver < b.resolver) ? 1 : -1}))
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
        <form onSubmit={submit} style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Description of Incident</h2>
            <FormControl>
                <InputLabel style={{ minWidth: "200px" }}>Updated on: {updatedDate}</InputLabel>
            </FormControl><br></br><br></br><br></br>
            <FormControl>
                <InputLabel>Assigned To</InputLabel>
                <Select 
                    style={{width: '160px'}}
                    labelId="resolvers-label"
                    id="resolvers"
                    defaultValue={currentResolver}
                    onChange={(e) => setCurrentResolver(e.target.value)}
                >
                    {resolvers.map((resolver, index) => 
                        <MenuItem key={index} value={resolver}>{resolver}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Select Status</InputLabel>
                <Select 
                    style={{width: '160px'}}
                    labelId="statuses-label"
                    id="statuses"
                    defaultValue={currentStatus}
                    onChange={(e) => setCurrentStatus(e.target.value)}
                >
                    {statuses.map((status, index) => 
                        <MenuItem key={index} value={status}>{status}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl>
                <TextareaAutosize minRows={8} style={{ minWidth: '20vw' }} value={ currentResolverComments ? currentResolverComments : 'Enter comments here *'} onChange={(e) => setCurrentResolverComments(e.target.value)} />
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{ backgroundColor: '#3f50b5', color: '#fff', marginRight: '5px' }} type="submit">Save</Button>
                <Button style={{ backgroundColor: 'crimson', color: '#fff' }} onClick={() => setOpen(false)}>Close</Button>
            </div>
        </form>
      );

    if(updatedIncident.loading){
        return "loading";
    }

    if(updatedIncident.error){
        return "error";
    }

    return (
        <div style={{display: "flex", height: "100%", minHeight: "100vh", justifyContent: "center", background: "lightGray", paddingTop: "10vh" }}>
            <Menubar userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} currentUsername={currentUsername} />
            { !userAuthenticated
            ?<Login setUserAuthenticated={setUserAuthenticated} setCurrentUsername={setCurrentUsername} />
            :<div style={{ textAlign: 'center' }}>
                <h1>List of Existing Incidents</h1>
                <IncidentPosts 
                    handleOpen={handleOpen} 
                    handleSortDirection={handleSortDirection} 
                    sortDirection={sortDirection} 
                    reports={reports} 
                    setReports={setReports}
                    classes={classes}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
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
            }
        </div>
    )
}

export default Incidents