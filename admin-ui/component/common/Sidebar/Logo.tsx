import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, IconButton } from '@mui/material';

interface logoProps {
  toggleMenu: boolean;
  handleMenu: () => void;
}
function SidebarLogo({ handleMenu, toggleMenu }: logoProps) {
	return (
  <Grid
  style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}
		>
  {toggleMenu && (
				<Grid
    textAlign="left"
    pt={1}
    display={{ xs: 'none', sm: 'none', md: 'block' }}
  >
    <img
  src="./images/genesislogo3.png"
  alt="LoginImage"
  style={{
							height: '100%', width: '90%', marginRight: '2rem', marginLeft: '0.7rem',
						}}
					/>
  </Grid>
			)}
  <>
  <IconButton onClick={handleMenu}>
  {toggleMenu ? <MenuIcon /> : <ListIcon />}
				</IconButton>
			</>
		</Grid>
	);
}

export default SidebarLogo;
