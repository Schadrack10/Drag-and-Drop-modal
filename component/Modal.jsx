import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Basic from './Basic';
;

const input ={
    background:"#333",
    color:"white"
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#111',
  border: '2px solid #fff',
  height:"auto",
  width:"600px",
  boxShadow: 24,
  color:"white",
  p: 2,
};

export default function TransitionsModal() {
   const [bool , setBool] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = ()=> setBool(true)
  return (
    <div style={{height:"auto"}}>
      <Button variant="outlined" color="primary" sx={{margin:"0 40px"}} onClick={handleOpen}>Open modal</Button>
      <Modal
    
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h4">
            CREATE SHOWS
            </Typography>
            <hr style={{ width: "100px", margin: "10px 0" }} />
            <Typography variant="p" sx={{ fontSize:"11px"}}>
            <b>NOTE :</b> ONLY SHOWS WITH VIDEOS UNDERNEATH THEM ARE VISIBLE TO
            THE PUBLIC
            </Typography>
               <Box sx={{height:"250px",display:"flex"}}>
               <Box style={{height:"100%",width:"50%",padding:"10px"}}>
               <Basic/>
               </Box>
               <Box style={{height:"100%",width:"50%",padding:"10px"}}>
          
               <Box sx={{height:"50px",padding:"10px 0",background:"#222",display:"flex",alignItems:"center",padding:"10px 0",}}>
                    <p style={{margin:"0px 10px",fontSize:"14px"}}>{'SHOW NAME'}</p> 
                 
               </Box>
     
               <Box sx={{height:"100px",padding:"10px 0",background:"#222",display:"flex",alignItems:"flex-start",padding:"10px 0",marginTop:"20px"}}>
                    <p style={{margin:"0px 10px",fontSize:"14px"}}>{'SHOW DESCRIPTION'}</p> 
                 
               </Box>

               <Box sx={{display:"flex",justifyContent:"space-between", marginTop:"20px"}}>
               <Button
               variant="outlined"
                color="error"
                sx={{ '&:hover':{ background:"red",color:"white" }}}

                onClick={handleClose}
              >
                close
              </Button>
              <Button
               variant="outlined"
                sx={{ '&:hover':{ background:"blue",color:"white" }}}
                onClick={handleCreate}
              >
                create
              </Button>
               </Box>
               </Box>
                   
               </Box>
            </Box>
        </Fade>
      </Modal>
    </div>
  );
}

