import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ImageButton, ImageSrc, ImageMarked, Image, ImageBackdrop} from './ImageComponent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ControlTableInfo = () => {

  const [open, setOpen] = useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const images = [
    {
      url: 'https://img.freepik.com/premium-vector/database-icon-hand-drawn-color-vector-illustration_755164-8745.jpg?w=2000',
      title: 'Control Table Info',
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
            <DialogTitle>Control Table Info</DialogTitle>
            <DialogContent>

            
            <TextField
                autoFocus
                margin="dense"
                id="projectID"
                label="Host"
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
                id="bucketID"
                label="Database"
                type="text"
                fullWidth
                variant="standard"
            />

            <TextField
                autoFocus
                margin="dense"
                id="bucketID"
                label="Table"
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

export default ControlTableInfo;
