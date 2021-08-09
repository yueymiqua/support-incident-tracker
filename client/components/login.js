import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Input, InputLabel, FormControl, Button } from '@material-ui/core';
import Link from 'next/link';
import { GET_USER_BY_USERNAME } from '../graphql/queries';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const login = ({ setUserAuthenticated, setCurrentUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const { data, refetch } = useQuery(GET_USER_BY_USERNAME, { 
        variables: { 
            username: username, password: password
        },
        refetchOnWindowFocus: false,
        enabled: false,
    });

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
    const handleClose = (event) => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        refetch();
        if(!data.getUserByUsername){
            return setOpen(true)
        } else {
            if(data.getUserByUsername.password === password) {
                return(setUserAuthenticated(true), setCurrentUsername(username))
            } else {
                
                return setOpen(true)
            }
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", background: "lightGray", alignItems: "center"}}>
            <form className='form-container' style={{textAlign: "center", background: 'white', padding: '15px 20px', borderRadius: '10px', borderWidth: '2px', borderStyle: 'groove'}} onSubmit={onSubmit}>
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
                        <Input id="password" aria-describedby="my-helper-text" placeholder="password" type="password" value={password} onInput={(e) => setPassword(e.target.value)}/>
                </FormControl>
                </div>
                <Button type="submit" style={{ color: 'ivory', backgroundColor: 'steelblue', margin: '10px 0px'}}>Login</Button><br></br>
                <Link href="/"><Button style={{ color: 'ivory', backgroundColor: 'purple' }}>Back</Button></Link>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Error: Wrong username or password. Please try again.
                </Alert>
            </Snackbar>
        </div>
    )
};

export default login