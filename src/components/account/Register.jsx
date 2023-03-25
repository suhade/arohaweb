import React, {useState} from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const Register = () => {
    const [firstName, setFirstName] = useState('')
   
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, email, password) 
    }
 
    return (
        <>
        <section className='pagesContent'>
      
        <React.Fragment>
            
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
            <h2>Welcome to the Family!</h2>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Full Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                  
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            
     
        </React.Fragment>
        </section>
        </>
    )
}
 
export default Register;