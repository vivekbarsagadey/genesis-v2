'use client';

import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { headerstyle as style } from './header.style';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function HeaderComponent() {
  const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);

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
      onClick={handleClick}
    >
      Companies
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Create Company
    </Link>,
    <Typography key="3" color="text.primary">
      Company
    </Typography>,
  ];

  return (
    <Grid container style={style.headercontainer}>
      <Grid item xs={3.7} display="flex" alignItems={'center'} ml={2}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid item xs={8}>
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
                style={style.avtar}
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
