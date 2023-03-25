import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function Countries(props) {
    const [ setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth:220 }}>
          <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
           
            label="Country"
            onChange={handleChange}
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
          <FormHelperText>Select your Country</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 120,  }}>
        <Button variant="contained" href="/lang">
                  Select
              </Button>
         
        </FormControl>
      </div>
    );
  }

export default Countries;