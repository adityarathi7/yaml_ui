import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DynamicInputFields from './DynamicInputFields';
import { ImageButton, ImageSrc, ImageMarked, Image, ImageBackdrop} from './ImageComponent';
import Typography from '@mui/material/Typography';

const AddTable = () => {

  const [open, setOpen] = useState(false);
  const [tableOperation, setTableOperation] = useState('Append');
  const [chunkSize, setChunkSize] = useState(800);
  const [errorThreshold, setErrorThreshold] = useState(10);

  const chunkSizeArray = [
    {
      value: 200,
      label: '200',
    },
    {
      value: 500,
      label: '500',
    },
    {
      value: 800,
      label: '800',
    },
  ];

  const errorThresholdArray = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
  ];
  
  function valueChunkSize(value) {
    setChunkSize(value);
    return value ;
  }

  function valueErrorThreshold(value) {
    setErrorThreshold(value);
    return value ;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (event) => {
    setTableOperation(event.target.value);
  };

  const images = [
    {
      url: "https://static-00.iconduck.com/assets.00/table-storage-icon-512x424-ypye0m4d.png",
      title: 'Add Table',
      width: '40%',
    },
  ];


  return (
    <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    onClick={handleClickOpen}
                    style={{
                        width: image.width,
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
            ))}
        </Box>
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Table</DialogTitle>
            <DialogContent>

            
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Table Name"
                type="text"
                fullWidth
                variant="standard"
            />

            <TextField
                autoFocus
                margin="dense"
                id="regex"
                label="Regex Pattern"
                type="text"
                fullWidth
                variant="standard"
            />

                <InputLabel id="table-operation-label">Table Operation</InputLabel>
                <Select
                    labelId="table-operation"
                    id="demo-simple-select"
                    value={tableOperation}
                    label="Table Operation"
                    onChange={handleChange}
                >
                    <MenuItem value={'Append'}>Append</MenuItem>
                    <MenuItem value={'Truncate'}>Truncate</MenuItem>
                    <MenuItem value={'Merge'}>Merge</MenuItem>
                </Select>

                <InputLabel id="chunk-size-label">Chunk Size</InputLabel>
                <Box sx={{ width: 300 }}>
                    <Slider
                    aria-label="Always visible"
                    defaultValue={chunkSize}
                    getAriaValueText={valueChunkSize}
                    step={10}
                    marks={chunkSizeArray}
                    valueLabelDisplay="on"
                    max={1000}
                    min={200}
                    />
                </Box>

                <InputLabel id="error-threshold-label">Error Threshold</InputLabel>
                <Box sx={{ width: 300 }}>
                    <Slider
                    aria-label="Always visible"
                    defaultValue={errorThreshold}
                    getAriaValueText={valueErrorThreshold}
                    step={2}
                    marks={errorThresholdArray}
                    valueLabelDisplay="on"
                    max={20}
                    min={0}
                    />
                </Box>

                <InputLabel id="column-maping-label">Column Mapping</InputLabel>
        
            <DynamicInputFields/>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Add New Field</Button>
              <Button onClick={handleClose}>Create Table</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

export default AddTable;
