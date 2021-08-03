import { useState } from 'react'
import { Input, InputLabel, FormHelperText, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import Link from 'next/link'

const newUser = () => {
    const departments = ["HR", "Admin", "Finance", "Engineering"]
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [department, setDepartment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username: ', username, 'Password: ', password, 'Department: ', department)
        setUsername('');
        setPassword('');
        setDepartment('');
        window.location.replace('/login');
    }

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <form className='form-container' style={{textAlign: "center"}} onSubmit={(e) =>  handleSubmit(e)}>
                <h1>Create New User</h1>
                <div>
                    <FormControl required>
                        <InputLabel id="username-label" style={{background: "white"}}>Username</InputLabel>
                        <Input id="username" placeholder="username" value={username} onInput={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="password-label" style={{background: "white"}}>Password</InputLabel>
                        <Input id="password" placeholder="password" value={password} onInput={(e) => setPassword(e.target.value)}/>
                    <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="department-label" style={{background: "white"}}>Department</InputLabel>
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

export default newUser