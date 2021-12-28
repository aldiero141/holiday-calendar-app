import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';
import Dropdown from "./Dropdown";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');
  const [showButton, setShowButton] = React.useState(false);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setShowButton(!showButton);
  };


  const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;
    font-size: 0.875em;
    margin-bottom: 1em;

    @media (max-width: 768px) {
        font-size: 0.5em
    }
  `;

  return (
      <Wrapper>
           <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                >

                <ToggleButton value="ip" >Automatic</ToggleButton>
                <ToggleButton value="dropdown" >Choose Country</ToggleButton>
                
            </ToggleButtonGroup>

            {showButton ? <Dropdown /> : null}
      </Wrapper>
  );
}