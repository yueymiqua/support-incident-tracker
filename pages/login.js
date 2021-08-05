import { useState } from 'react'
import { Input, InputLabel, FormControl, Button } from '@material-ui/core'
import Link from 'next/link'
import Menubar from '../components/menubar';

const login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [department, setDepartment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username: ', username, 'Password: ', password, 'Department: ', department)
        setUsername('');
        setPassword('');
        setDepartment('');
        window.location.replace('/incidents');
    }

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <Menubar />
            <form className='form-container' style={{textAlign: "center", background: 'white', padding: '15px 20px', borderRadius: '10px', borderWidth: '2px', borderStyle: 'groove'}} onSubmit={(e) =>  handleSubmit(e)}>
                <h1>Login to Account</h1>
                <div>
                    <FormControl required>
                        <InputLabel id="username-label">Username</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" placeholder="username" value={username} onInput={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl required>
                        <InputLabel id="password-label">Password</InputLabel>
                        <Input id="password" aria-describedby="my-helper-text" placeholder="password" value={password} onInput={(e) => setPassword(e.target.value)}/>
                </FormControl>
                </div>
                <Button type="submit" style={{ color: 'ivory', backgroundColor: 'steelblue', margin: '10px 0px'}}>Login</Button><br></br>
                <Link href="/"><Button style={{ color: 'ivory', backgroundColor: 'purple' }}>Back</Button></Link>
            </form>
        </div>
    )
}

export default login