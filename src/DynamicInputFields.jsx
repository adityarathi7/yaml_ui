import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

function DynamicInputFields() {
  const [columnMapping, setColumnMapping] = useState([{ key: '', value: '' }]);

  const handleAddInput = () => {
    const newInputs = [...columnMapping, { key: '', value: '' }];
    setColumnMapping(newInputs);


    const arrayOfDictionaries = columnMapping.reduce((acc, curr) => {
      if (curr.key !== '' && curr.value !== '') {
        acc.push({ [curr.key]: curr.value });
      }
      return acc;
    }, []);

    console.log(arrayOfDictionaries);

  };

  const handleRemoveInput = (index) => {
    const newInputs = [...columnMapping];
    newInputs.splice(index, 1);
    setColumnMapping(newInputs);
  };

  const handleChangeInput = (event, index, keyOrValue) => {
    const newInputs = [...columnMapping];
    newInputs[index][keyOrValue] = event.target.value;
    setColumnMapping(newInputs);
  };

  return (
    <>
      {columnMapping.map((input, index) => (
        <div key={index}>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
          >
            <Stack direction="row" spacing={1}>
              <TextField
                  label="CSV"
                  value={input.key}
                  onChange={(event) => handleChangeInput(event, index, 'key')}
              />
              <TextField
                  sx = {{ width: '300'}}
                  label="BQ"
                  value={input.value}
                  onChange={(event) => handleChangeInput(event, index, 'value')}
              />
              <IconButton 
                aria-label="delete" 
                color="primary"
                onClick={() => handleRemoveInput(index)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton 
                aria-label="add" 
                color="primary"
                onClick={handleAddInput}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Box>
          
        </div>
      ))}
    </>
  );
}

export default DynamicInputFields;
