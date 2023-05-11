'use client';
import MailIcon from '@mui/icons-material/Mail';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { colors } from '../../../themes';
import { usePathname } from 'next/navigation';

const useStyles = makeStyles({
  headercontainer: {
    backgroundColor: colors.baseBackGround,
  },
  avtar: {
    width: 32,
    height: 32,
  },
});

function HeaderComponent() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={()=>console.log("selected >>>")}
    >
      {pathname}
    </Link>
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   href="/material-ui/getting-started/installation/"
    //   onClick={handleClick}
    // >
    //   Create Company
    // </Link>,
  ];

  return (
    <Grid container className={classes.headercontainer}>
      <Grid
        item
        lg={3.7}
        xs={8}
        sm={6.5}
        md={6.7}
        display="flex"
        alignItems={'center'}
        ml={2}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid item lg={8} sm={5} xs={3} md={5}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          py={0.5}
          display="flex"
          justifyContent="flex-end"
        >
          <Stack direction="row">
            <IconButton>
              <MailIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <SettingsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 0.7 }}
              aria-haspopup="true"
            >
              <Avatar
                className={classes.avtar}
                alt="Remy Sharp"
                src="./images/avtar.png"
              />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={openMenu}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Account</MenuItem>
              <MenuItem onClick={handleClose}>Privacy</MenuItem>
              <MenuItem onClick={handleClose}>Help</MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeaderComponent;
