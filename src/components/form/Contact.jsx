import React, {useState} from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
   
    const [password, ] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, ) 
    }
    return (
        
        <>
        <section className='pagesContent'>
        <React.Fragment>
         
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
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
                    type="phone number"
                    variant='outlined'
                    color='secondary'
                    label="Phone"
                    
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="messages"
                    variant='outlined'
                    color='secondary'
                    label="Messages"
                    
                    required
                    fullWidth
                    sx={{mb: 6}}
                />
                <Button variant="outlined" color="secondary" type="submit">Send</Button>

           
            </form>
            
     
        </React.Fragment>
        </section>
        </>
        
    );
}

export default Contact;