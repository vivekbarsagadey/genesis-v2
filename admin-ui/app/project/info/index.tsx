'use client';

import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  Card,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useRouter } from 'next/navigation';
import Moment from 'react-moment';
import BuilderHome from '../../../builder';
import downloadJsonFile from '../../utility/json.downloder';
import IProject from '../project.model';
import BuilderThemeComponent from './builder.theme.select';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);
type InfoCustomerComponentProps = {
  items: IProject;
};

// export const ProjectContext = React.createContext();

function InfoProjectComponent({ items }: InfoCustomerComponentProps) {
  const router = useRouter();
  const [openTheme, setOpenTheme] = useState(false);
  const [localStoreData, setLocalStoreData] = useState({});
  const handleOpenTheme = () => setOpenTheme((s) => !s);
  const handleCloseTheme = () => setOpenTheme((s) => !s);

  const [openBuilder, setOpneBuilder] = useState(false);

  const handelCloseBuilder = () => {
    setOpneBuilder((s) => !s);
  };
  const handelOpenBuilder = () => {
    setOpneBuilder((s) => !s);
  };

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };

  useEffect(() => {
    const projectJsonData = JSON.parse(localStorage.getItem('projectJsonData'));
    if (projectJsonData) {
      setLocalStoreData(projectJsonData);
    }
  }, []);



  const openBuilderMethod = () => {
    if (items.projectJson !== null 
      // || Object.keys(localStoreData).length > 0
      ) {
      handelOpenBuilder();
    } else {
      handleOpenTheme();
    }
  };

  return (
    <>
      <Box mt={0.6} mr={2}>
        <Card elevation={0}>
          <Grid container>
            <Grid item xs={0.6} display="flex" justifyContent="flex-end">
              <Grid container ml={1}>
                <Grid item xs={1}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={1.7}>
              <Typography variant="body2" noWrap>
                <Moment format="DD MMM YYYY">{items.createdAt}</Moment>
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {items.name}
              </Typography>
            </Grid>

            <Grid item xs={2.5}>
              <Typography variant="body2" noWrap>
                {items.customerName}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {items.application}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Typography variant="body2" noWrap>
                {items.status}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container display="flex" justifyContent="center" ml={2}>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <IconButton onClick={openBuilderMethod}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={1}>
                  <Tooltip title="Download JSON">
                    <IconButton onClick={jsonFileDownload}>
                      <FileDownloadIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        {/* Builder Theme screen  */}
        <Dialog
          fullScreen
          open={openTheme}
          onClose={handleCloseTheme}
          TransitionComponent={Transition}
        >
          <BuilderThemeComponent handleCloseTheme={handleCloseTheme} />
        </Dialog>
        {/* Builder full screen  */}
        <Dialog
          fullScreen
          open={openBuilder}
          onClose={handelCloseBuilder}
          TransitionComponent={Transition}
        >
          <BuilderHome id={items.id} localStoreData={localStoreData} />
        </Dialog>
      </Box>
      <Divider style={{ width: '98.5%' }} />
    </>
  );
}
export default InfoProjectComponent;
