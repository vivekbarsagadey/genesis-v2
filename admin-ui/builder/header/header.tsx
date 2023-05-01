import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function BuilderHeaderComponent({ projectInfo }) {
	return (
  <Box padding={2}>
  <Grid container>
  <Grid
  item
  xs={2}
  display="flex"
  alignItems="center"
  justifyContent="space-between"
				>
  <Button variant="contained" size="small" style={{ height: '4vh' }}>
  New
					</Button>
  <Typography>{projectInfo.name}</Typography>
				</Grid>
  <Grid item xs={8} />
  <Grid
  item
  xs={2}
  display="flex"
  alignItems="center"
  justifyContent="space-between"
				>
  <IconButton>
  <EmailIcon fontSize="small" />
					</IconButton>
  <IconButton>
  <SettingsIcon fontSize="small" />
					</IconButton>
  <IconButton>
  <NotificationsActiveIcon fontSize="small" />
					</IconButton>
  <IconButton>
  <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 22, height: 22 }}
						/>
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
}
export default BuilderHeaderComponent;
