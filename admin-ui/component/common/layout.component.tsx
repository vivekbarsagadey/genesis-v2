import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import HeaderComponent from './header';
import SidebarLogo from './sidebar/logo';
import ProjectSidebar from './sidebar/project.sidebar/project.sidebar';
import { colors } from '../../themes';

function LayoutComponent({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {session && (
        <Grid container>
          <Grid
            item
            xs={toggleMenu ? 1.5 : 1.5}
            sm={toggleMenu ? 1.5 : 0.5}
            md={toggleMenu ? 2 : 0.5}
            lg={toggleMenu ? 2 : 0.5}
            textAlign={toggleMenu ? 'right' : 'left'}
            style={{ backgroundColor: colors.baseBackGround, height: '100vh' }}
          >
            <SidebarLogo handleMenu={handleMenu} toggleMenu={toggleMenu} />
            <ProjectSidebar toggleMenu={toggleMenu} />
          </Grid>
          <Grid
            item
            xs={toggleMenu ? 10.5 : 10.5}
            sm={toggleMenu ? 10.5 : 11.5}
            md={toggleMenu ? 10 : 11.5}
            lg={toggleMenu ? 10 : 11.5} 
            style={{ backgroundColor: colors.baseBackGround}} >
            <HeaderComponent />
            {children}
          </Grid>
        </Grid>
      )}
      {!session && <>{children}</>}
    </>
  );
}

export default LayoutComponent;
