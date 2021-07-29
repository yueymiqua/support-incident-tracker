import { useState } from 'react'
import { Input, InputLabel, TextareaAutosize, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import Link from 'next/link'

const newIncident = () => {
    const departments = ["HR", "Admin", "Finance", "Engineering"]
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [department, setDepartment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subject: ', subject, 'Description: ', description, 'Department: ', department)
        setSubject('');
        setDescription('');
        setDepartment('');
    }

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <form className='form-container' style={{textAlign: "center"}} onSubmit={(e) =>  handleSubmit(e)}>
                <h1>Create Incident Report</h1>
                <div>
                    <FormControl required>
                        <InputLabel id="subject-label" style={{background: "white"}}>Subject</InputLabel>
                        <Input id="subject" aria-describedby="my-helper-text" value={subject} onInput={(e) => setSubject(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <TextareaAutosize minRows={3} placeholder="Describe your problem" value={description} onInput={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="department-label" style={{background: "white"}}>Your Department</InputLabel>
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
                <Button type="submit">Submit</Button><br></br>
                <Link href="/">Back</Link>
            </form>
        </div>
    )
}

export default newIncident