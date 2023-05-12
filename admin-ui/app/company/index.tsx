'use client';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PrintIcon from '@mui/icons-material/Print';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { deleteCompany } from '../../services/company.action';
import { baseStyle, colors } from '../../themes';
import { ViewTypes } from '../utility';
import FilterComponent from './filters';
import CompanyCalendarView from './list/calendar.view';
import ExportComponent from './list/export.component';
import CompanyGraphView from './list/graph.view';
import CompanyGridView from './list/grid.view';
import CompanyKanbanView from './list/kanban.view';
import ListViewComponent from './list/list.view.component';
import { ICompany } from './models/company.model';
import CompanySearchDetails from './search';
import CompanyViewComponent from './view';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '7px',
};

interface CompanyComponentProps {
  companies: Array<ICompany>;
}
const useStyles = makeStyles({
  root: {
    backgroundColor: colors.white,
    borderRadius: baseStyle.borderRadius.small,
  },
  textDecor: { textDecoration: baseStyle.textDecoration.none },
  display: { display: baseStyle.display },
  divider: { background: '#009688', height: '0.1rem', marginTop: '0.2rem' },
  checkbox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function CompanyComponentHome({ companies }: CompanyComponentProps) {
  const classes = useStyles();
  const [copyCompanies, setCopyCompanies] = useState<Array<ICompany>>([
    ...companies,
  ]);
  const [multiSelect, setMultiSelect] = useState([]);
  const [selectAllDeletePopup, setSelectAllDeletePopup] = React.useState(false);
  const [selectDeletePopup, setSelectDeletePopup] = React.useState(false);
  const handleMultiSelectAllPopup = () => setSelectAllDeletePopup(true);
  const handleSelectPopup = () => setSelectDeletePopup(true);
  const handleCloseSelectDeletePopup = () => setSelectDeletePopup(false);
  const handleCloseSelectAllDeletePopup = () => setSelectAllDeletePopup(false);
  const [alert, setAlert] = React.useState(false);
  const [show, setShow] = useState(false);
  const [showDelAll, setShowDelAll] = useState(false);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

  const onSearchHandler = (c: Array<ICompany>) => {
    setCopyCompanies(c);
  };
  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };
  const myRef = useRef(null);
  const handleClickSnackbar = () => {
    setAlert(true);
  };
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });
  const itemsCallBackHandler = (_items: Array<ICompany>) => {
    setCopyCompanies(_items);
  };
  const eachCompanyId = companies.map((d) => d.id);
  const removeAllData = async () => {
    for (let i = 0; i <= companies.length; i++) {
      await deleteCompany(eachCompanyId[i]);
    }
    window.location.reload();
  };
  const removeData = (f: ICompany) => {
    removeAllData();
    handleClickSnackbar();
    window.location.reload();
  };
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };
  const removeSelectedData = async () => {
    if (multiSelect.length > 0) {
      for (let i = 0; i <= multiSelect.length; i++) {
        await deleteCompany(multiSelect[i]);
      }
      window.location.reload();
    }
  };
  const selectRemoveData = (f: ICompany) => {
    removeSelectedData();
    handleClickSnackbar();
    window.location.reload();
  };
  return (
    <Box ml={1.5} pb={1} mr={2.5} className={classes.root}>
      <Grid mt={1}>
        <Grid container spacing={1} pl={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <CompanySearchDetails
              companies={companies}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={5} md={6} sm={5} lg={7} className={classes.display}>
            <Grid container>
              <Grid item xs="auto" mt={0.3}>
                <FilterComponent
                  companies={companies}
                  onFilterHandler={onSearchHandler}
                  itemsCallBackHandler={itemsCallBackHandler}
                />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <ExportComponent copyCompanyData={copyCompanies} />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <Tooltip title="Print">
                  <IconButton
                    onClick={() => handlePrint()}
                    style={{ background: 'transparent' }}
                  >
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={3} md={6} sm={3}>
                <CompanyViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2.3}
            lg={1}
            md={1.6}
            mt={0.7}
            className={classes.checkbox}
          >
            {showDelAll ? (
              <Tooltip title="Delete All" arrow>
                <IconButton
                  aria-label="delete"
                  onClick={handleMultiSelectAllPopup}
                >
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : null}

            {multiSelect.length > 1 ? (
              <Tooltip title="Delete Selected" arrow>
                <IconButton aria-label="delete" onClick={handleSelectPopup}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : null}
          </Grid>
          <>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={selectAllDeletePopup}
              onClose={handleCloseSelectAllDeletePopup}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{ backdrop: { timeout: 500 } }}
            >
              <Fade in={selectAllDeletePopup}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-description"
                    fontSize="0.9rem"
                  >
                    Are you sure you want to delete All Companies ?
                  </Typography>
                  <Grid container mt={4}>
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleCloseSelectAllDeletePopup()}
                      >
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={removeData}
                      >
                        Ok
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Snackbar
              open={alert}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Items Deleted Successfully...
              </Alert>
            </Snackbar>
          </>
          <>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={selectDeletePopup}
              onClose={handleCloseSelectDeletePopup}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{ backdrop: { timeout: 500 } }}
            >
              <Fade in={selectDeletePopup}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-description"
                    fontSize="0.9rem"
                  >
                    {`Are you sure you want to delete ${multiSelect.length} company?`}
                  </Typography>
                  <Grid container mt={4}>
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleCloseSelectDeletePopup()}
                      >
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={selectRemoveData}
                      >
                        Ok
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Snackbar
              open={alert}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Items Deleted Successfully...
              </Alert>
            </Snackbar>
          </>
          <Grid item xs={1} mt={1}>
            <Link href="/company/create" passHref className={classes.textDecor}>
              <Button variant="contained" size="small">
                Create
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.divider}></Grid>
        {/* <Divider className={classes.divider} /> */}
        <Grid item xs={12} pl={2}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <Grid ref={myRef}>
                <CompanyGridView companies={copyCompanies} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid>
                <CompanyGraphView companies={copyCompanies} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <CompanyKanbanView companies={copyCompanies} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <CompanyCalendarView companies={copyCompanies} />
              </Grid>
            </Case>
            <Default>
              <Grid>
                <ListViewComponent
                  companies={copyCompanies}
                  myRef={myRef}
                  show={show}
                  setShow={setShow}
                  multiSelect={multiSelect}
                  setMultiSelect={setMultiSelect}
                  setShowDelAll={setShowDelAll}
                />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
export default CompanyComponentHome;
