import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const RoleInfoScreen = () => {
  return (
    <>
      <Box mr={2} mt={0.5}>
        <Paper variant="outlined">
          <Grid container paddingLeft={1} paddingBottom={0.7}>
            <Grid
              item
              xs={3}
              style={{ display: 'flex', alignContent: 'center' }}
              ml={2}
            >
              <Typography variant="subtitle2" noWrap>
                Name
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: 'flex', alignContent: 'center' }}
              ml={2}
            >
              <Typography variant="subtitle2" noWrap>
                Description
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ display: 'flex', alignContent: 'center' }}
              ml={2}
            >
              <Typography variant="subtitle2" noWrap>
                Code
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Typography
                variant="subtitle2"
                display={'flex'}
                justifyContent={'space-around'}
                noWrap
              >
                Action
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default RoleInfoScreen;
