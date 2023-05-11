'use client';

import EditIcon from '@mui/icons-material/Edit';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  Card,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import BuilderHome from '../../../builder';
import downloadJsonFile from '../../utility/json.downloader';
import BuilderThemeComponent from './builder.theme.select';
import { IProjects } from '../models';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="up" ref={ref} {...props} />,
);
type InfoCustomerComponentProps = {
  items: IProjects;
};

// export const ProjectContext = React.createContext();

function InfoProjectComponent({ items }: InfoCustomerComponentProps) {
  const [openTheme, setOpenTheme] = useState(false);
  const [localStoreData, setLocalStoreData] = useState({});
  const handleOpenTheme = () => setOpenTheme((s) => !s);
  const handleCloseTheme = () => setOpenTheme((s) => !s);

  const [openBuilder, setOpenBuilder] = useState(false);

  const handelCloseBuilder = () => {
    setOpenBuilder((s) => !s);
  };
  const handelOpenBuilder = () => {
    setOpenBuilder((s) => !s);
  };

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };

  useEffect(() => {
    const projectJsonData = JSON.parse(localStorage.getItem('projectJsonData') || '{}');
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
            <Grid item xs={2} display="flex" justifyContent="space-around">
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
          <BuilderThemeComponent handleCloseTheme={handleCloseTheme} id={items.id} />
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
