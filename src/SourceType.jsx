import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ImageButton, ImageSrc, ImageMarked, Image, ImageBackdrop} from './ImageComponent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SourceType = () => {

  const [open, setOpen] = useState(false);
  const [selectSource,setSelectSource] = useState('SFTP-Server');

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSelectSource(event.target.value);
  };


  const images = [
    {
      url: 'https://www.kindpng.com/picc/m/377-3779419_single-source-of-truth-icon-hd-png-download.png',
      title: 'Add Source Type',
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
            <DialogTitle>Add Source Type</DialogTitle>
            <DialogContent>

                <InputLabel id="table-operation-label">Table Operation</InputLabel>
                    <Select
                        labelId="table-operation"
                        id="demo-simple-select"
                        value={selectSource}
                        label="Table Operation"
                        onChange={handleChange}
                    >
                        <MenuItem value={'SFTP-Server'}>SFTP-Server</MenuItem>
                        <MenuItem value={'SharePoint'}>SharePoint</MenuItem>
                        <MenuItem value={'Remote VM'}>Remote VM</MenuItem>
                        <MenuItem value={'Same Machine'}>Same Machine</MenuItem>
                    </Select>

                
                <TextField
                    autoFocus
                    margin="dense"
                    id="projectID"
                    label="Hostname"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="bucketID"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="credentials"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="credentials"
                    label="Local Path"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="credentials"
                    label="Remote Path"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="credentials"
                    label="Port"
                    type="text"
                    fullWidth
                    variant="standard"
                />

            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add New Field</Button>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}

export default SourceType;
