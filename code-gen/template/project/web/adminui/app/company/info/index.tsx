'use client';
{% set Info_Cap = app_info['name'].capitalize() -%}
{% set Info_Sm = app_info['name'] -%}

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Moment from 'react-moment';
import { delete{{Info_Cap}} } from '../../../services/{{Info_Sm}}.action';
import { I{{Info_Cap}} } from '../models/{{Info_Sm}}.model';

const style = {
  position: 'absolute' as const,
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 325,
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingTop: 1,
  paddingLeft: 2,
  paddingRight: 1,
  paddingBottom: 2,
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

type Info{{Info_Cap}}ComponentProps = {
  {{Info_Sm}}: I{{Info_Cap}};
};

function Info{{Info_Cap}}Component({ {{Info_Sm}} }: Info{{Info_Cap}}ComponentProps) {
  const router = useRouter();
  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const deletePopupOpen = () => setOpen(true);

  const handleCloseDelete = () => setOpen(false);
  const handleClick = () => {
    setAlert(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: I{{Info_Cap}}) => {
    window.location.reload();
    delete{{Info_Cap}}(f.id);
    handleClick();
  };
  return (
    <Box mt={0.6} mr={2}>
      <Card elevation={0}>
        <Grid container>
          <Grid item xs={0.7} display="flex" justifyContent="flex-end">
            <Grid container ml={1}>
              <Grid item xs={5}>
                <Checkbox size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" noWrap>
              <Moment format="DD MMM YYYY">{ {{Info_Sm}}.createdAt}</Moment>
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography variant="body2" noWrap>
              { {{Info_Sm}}.name}
            </Typography>
          </Grid>
          <Grid item xs={1.9} mr={0.9}>
            <Typography variant="body2" noWrap>
              { {{Info_Sm}}.email}
            </Typography>
          </Grid>
          <Grid item xs={2.1}>
            <Typography variant="body2" noWrap display="flex">
              { {{Info_Sm}}.mobile}
            </Typography>
          </Grid>
          <Grid item xs={1.7}>
            <Typography variant="body2" noWrap display="flex">
              { {{Info_Sm}}.address}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={3.3} ml={2}>
                <Tooltip title="Edit">
                  <Link href={`/{{Info_Sm}}/${ {{Info_Sm}}.id}`}>
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Delete">
                  <IconButton onClick={deletePopupOpen}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Snackbar
                  open={alert}
                  autoHideDuration={8000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                   
                  >
                    Items Deleted Sucessfully...
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleCloseDelete}
          closeAfterTransition
         
         
          
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-description"
                
                fontSize="0.9rem"
              >
                Are you sure you want to delete the selected {{Info_Sm}}?
              </Typography>
              <Grid container mt={2}>
                <Grid item xs={6} />
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                   
                    onClick={() => handleCloseDelete()}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => removeData({{Info_Sm}})}
                    
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </Card>
      <Divider />
    </Box>
  );
}
export default Info{{Info_Cap}}Component;
