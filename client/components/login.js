import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Input, InputLabel, FormControl, Button } from '@material-ui/core';
import Link from 'next/link';
import { GET_USER_BY_USERNAME } from '../graphql/queries';

const login = ({ setUserAuthenticated, setCurrentUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { data, refetch } = useQuery(GET_USER_BY_USERNAME, { 
        variables: { 
            username: username, password: password
        },
        refetchOnWindowFocus: false,
        enabled: false,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        refetch();
        if(!data.getUserByUsername){
            return(
                alert('Incorrect username or password - please try again'),
                setUsername(''),
                setPassword('')
            )
        } else {
            if(data.getUserByUsername.password === password) {
                return(setUserAuthenticated(true), setCurrentUsername(username))
            } else {
                return(
                    alert('Incorrect username or password - please try again'),
                    setUsername(''),
                    setPassword('')
                )
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
        </div>
    )
};

export default login