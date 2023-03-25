import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function Lang(props) {
    const [ setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
        <>
        <section className='pagesContent'>
        <FormControl sx={{ m: 1, minWidth:220 }}>
          <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
           
            label="Language"
            onChange={handleChange}
          >
            <MenuItem >Swahili</MenuItem>
            <MenuItem >Zuru</MenuItem>
            <MenuItem >English</MenuItem>
          </Select>
          <FormHelperText>Select your Langauge</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 100,  }}>
        <Button variant="contained" href="/checkout">
                  Select
              </Button>
         
        </FormControl>
        </section>
    </>
  )

  }

export default Lang;