'use client';

import MailIcon from '@mui/icons-material/Mail';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { colors } from '../../../themes';

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
  const segments = pathname.split('/');
  segments.shift();

  // const breadcrumbs = segments.map((segment, index) => ({
  //   text: segment,
  //   href: `/${segments.slice(0, index + 1).join('/')}`,
  // }));
  const separator = ' > ';
  const breadcrumbs = segments.map((segment) => ({
    text: segment,
    href: `/${segment}`,
  }));

  const breadcrumbsWithSeparators = [];
  for (let i = 0; i < breadcrumbs.length; i++) {
    breadcrumbsWithSeparators.push(breadcrumbs[i]);
    if (i < breadcrumbs.length - 1) {
      breadcrumbsWithSeparators.push({ separator });
    }
  }

  return (
    <Grid container className={classes.headercontainer}>
      <Grid
        item
        lg={3.7}
        xs={8}
        sm={6.5}
        md={6.7}
        display="flex"
        alignItems="center"
        ml={2}
      >
        <Stack direction="row" spacing={2}>
          {breadcrumbsWithSeparators.map((breadcrumb, index) => (
            <span key={index}>
              {breadcrumb.href ? (
                <Link href={breadcrumb.href} style={{ textDecoration: 'none' }}>
                  <Typography>{breadcrumb.text}</Typography>
                </Link>
              ) : (
                <span>{breadcrumb.separator}</span>
              )}
            </span>
          ))}
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
