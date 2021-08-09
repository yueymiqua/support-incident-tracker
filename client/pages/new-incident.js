import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_INCIDENT } from '../graphql/mutations';
import { InputLabel, TextareaAutosize, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import Link from 'next/link'
import Menubar from '../components/menubar';

const newIncident = () => {
    const initiator = 'user1';
    const departments = ["HR", "Admin", "Finance"];
    const priorities = ['LOW', 'MEDIUM', 'HIGH'];
    const status = 'OPEN';
    const creation_date = '2021-08-08';
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [addIncident, addedIncident] = useMutation(ADD_INCIDENT);
    const incidentId = () => {
        const randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10)
        return randomInteger
    };

    const onSubmit = () => {
        addIncident({
            variables: { 
                incidentId: incidentId(),
                description: description,
                department: department,
                priority: priority,
                initiator: initiator,
                status: status,
                creation_date: creation_date
             }
        })
        alert('Your incident has been created. Redirecting to incidents page.')
        window.location.replace('/incidents');
    }

    const submit = (e) => {
        e.preventDefault()
        onSubmit({ incidentId, description, department, priority, initiator, status, creation_date })
    }

    if(addedIncident.loading){
        return "loading"
    }

    if(addedIncident.error){
        return "error"
    }

    if(initiator){
    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <Menubar />
            <form className='form-container' style={{textAlign: "center", background: 'white', padding: '15px 20px', borderRadius: '10px', borderWidth: '2px', borderStyle: 'groove'}} onSubmit={submit}>
                <h1>Create Incident Report</h1>
                <div>
                    <FormControl required>
                        <TextareaAutosize minRows={5} style={{ minWidth: '20vw' }} placeholder="* Describe Your Problem *" value={description} onInput={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="department-label">Your Department</InputLabel>
                        <Select 
                            style={{width: '160px'}}
                            labelId="departments-label"
                            id="departments"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            {departments.map((dept, index) => 
                                <MenuItem key={index} value={dept}>{dept}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="priority-label">Priority</InputLabel>
                        <Select 
                            style={{width: '160px'}}
                            labelId="priorities-label"
                            id="priorities"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            {priorities.map((priority, index) => 
                                <MenuItem key={index} value={priority}>{priority}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
                <Button type="submit" style={{ color: 'ivory', backgroundColor: 'steelblue', margin: '10px 0px'}}>Submit</Button><br></br>
                <Link href="/"><Button style={{ color: 'ivory', backgroundColor: 'purple' }}>Back</Button></Link>
            </form>
        </div>
    )

    } else {
        window.location.replace('login')
    }
}

export default newIncident