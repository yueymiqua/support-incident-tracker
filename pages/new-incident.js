import { useState } from 'react'
import { Input, InputLabel, TextareaAutosize, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import Link from 'next/link'

const newIncident = () => {
    const user = 'user1';
    const departments = ["HR", "Admin", "Finance", "Engineering"];
    const priorities = ['LOW', 'MEDIUM', 'HIGH'];
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('OPEN');
    const [createdDate, setCreatedDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            'Description: ', description, 
            'Department: ', department, 
            'Priority: ', priority, 
            'Status: ', status, 
            'Created: ', createdDate)
        setDescription('');
        setDepartment('');
        setPriority('');
        alert('Your incident has been created. Redirecting to incidents page.')
        window.location.replace('/incidents');
    }
    if(user){
    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <form className='form-container' style={{textAlign: "center", background: 'white', padding: '15px 20px', borderRadius: '10px', borderWidth: '2px', borderStyle: 'groove'}} onSubmit={(e) =>  handleSubmit(e)}>
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