import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
// import axios from 'axios';

export default function BasicSelect() {
  const [countryID, setcountryID] = useState('');
//   const [countryID, setCountryID] = useState([]);

  const handleChange = (event) => {
    setcountryID(event.target.value);
  };

//   useEffect(() => {
//     getCountryList();
    
//   },[]);

  const Wrapper = styled.div`
    
    margin-bottom: 1em;

    @media (max-width: 768px) {
      font-size: 0.5em
    }
  `;

//   const getCountryList = () => {
//     axios.get('https://restcountries.com/v3.1/all').then((response) => {
//       let data = response.data;
//       setCountryID(data);
//       console.log(data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   }


  return (
    <Wrapper>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryID}
                label="Country"
                onChange={handleChange}
                >
                    <MenuItem
                        value={"ID"}
                    >
                    ID
                    </MenuItem>
                    <MenuItem
                        value={"FR"}
                    >
                    FR
                    </MenuItem>
                {/* {countryID.map((cID) => (
                    <MenuItem
                    key={cID}
                    value={cID}
                    >
                    {cID}
                    </MenuItem>
                ))} */}
                </Select>
            </FormControl>
        </Box>
    </Wrapper>
    
  );
}