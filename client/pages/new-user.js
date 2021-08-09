import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';
import { Input, InputLabel, FormHelperText, FormControl, Select, MenuItem, Button } from '@material-ui/core';
import Link from 'next/link';
import Menubar from '../components/menubar';


const newUser = () => {
    const departments = ["HR", "Admin", "Finance"];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [addUser, addedUser] = useMutation(ADD_USER);
    const userId = () => {
        const randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10)
        return randomInteger
    };

    const onSubmit = () => {
        addUser ({
            variables: { 
                userId: userId(),
                username: username,
                password: password,
                department: department
             }
        })
        window.location.replace('/incidents');
    }

    const submit = (e) => {
        e.preventDefault()
        onSubmit({ userId, username, password, department })
    }

    if(addedUser.loading) {
        return 'loading'
    }

    if(addedUser.error) {
        return 'error'
    }

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <Menubar />
            <form className='form-container' style={{ textAlign: "center", background: 'white', padding: '15px 20px', borderRadius: '10px', borderWidth: '2px', borderStyle: 'groove' }} onSubmit={submit}>
                <h1>Create New User</h1>
                <div>
                    <FormControl required>
                        <InputLabel id="username-label">Username</InputLabel>
                        <Input id="username" placeholder="username" value={username} onInput={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="password-label">Password</InputLabel>
                        <Input id="password" placeholder="password" type="password" value={password} onInput={(e) => setPassword(e.target.value)}/>
                    <FormHelperText id="my-helper-text">We won't share your password.</FormHelperText>
                </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="department-label">Department</InputLabel>
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
                <Button type="submit" style={{ color: 'ivory', backgroundColor: 'steelblue', margin: '10px 0px'}}>Submit</Button><br></br>
                <Link href="/"><Button style={{ color: 'ivory', backgroundColor: 'purple' }}>Back</Button></Link>
            </form>
        </div>
    )
}

export default newUser