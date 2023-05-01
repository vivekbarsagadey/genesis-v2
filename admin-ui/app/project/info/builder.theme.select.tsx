import React, { useEffect } from 'react';
import {
	Button, Card, Grid, Typography,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Box } from '@material-ui/core';
import BuilderThemesSelectComponent from './builder.page.component.select';
import BuilderPageSelectComponent from './builder.page.component.select';

const useStyles = makeStyles({
	background_genesis1: {
		backgroundImage: `url(${'./images/genesis1.png'})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '100vh',
		backgroundPosition: 'center',
		position: 'relative',
	},
	genesislogo: {
		height: '300px',
		width: '290px',
		position: 'relative',
	},
	genesislogo1: {
		position: 'absolute',
		top: '50%',
		left: '45%',
		margin: '-50px 0 0 -50px',
	},
	pagesMainGrid: {
		background: '#0f172a',
	},
});

type IBuilderTheme = {
  handleCloseTheme: () => void;
};
const Transition = React.forwardRef((
	props: TransitionProps & {
    children: React.ReactElement;
  },
	ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

function BuilderThemeComponent({ handleCloseTheme }: IBuilderTheme) {
	const classes = useStyles();
	const [themes, setThemes] = React.useState([]);
	const [checkbox, setCheckbox] = React.useState('checkbox');
	const [builderThemes, setBuilderThemes] = React.useState(false);
	const [blankTheme, setBlankTheme] = React.useState<boolean>(false);
	const [blackTheme, setBlackTheme] = React.useState<boolean>(false);
	const [whiteTheme, setWhiteTheme] = React.useState<boolean>(false);
	const [glassmorphismTheme, setGlassmorphismTheme] = React.useState<boolean>(false);
	const [themeSelected, setThemeSelected] = React.useState('');

	const handleClickOpen = () => {
		setBuilderThemes(true);
		if (blankTheme) {
			setThemeSelected('blankTheme');
		}
		if (blackTheme) {
			setThemeSelected('blackTheme');
		}
		if (whiteTheme) {
			setThemeSelected('whiteTheme');
		}
		if (glassmorphismTheme) {
			setThemeSelected('glassmorphismTheme');
		}
	};

	const handleClose = () => {
		setBuilderThemes(false);
	};
	const updateTheme = (themeRecv: string) => {
		if (themeRecv === 'Blank Theme') {
			setBlankTheme((s) => !s);
		}
		if (themeRecv === 'Black Theme') {
			setBlackTheme((s) => !s);
		}
		if (themeRecv === 'White Theme') {
			setWhiteTheme((s) => !s);
		}
		if (themeRecv === 'Glassmorphism Theme') {
			setGlassmorphismTheme((s) => !s);
		}
	};

	const fetchData = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/theme`);
		if (!response.ok) {
			throw new Error('Data coud not be fetched!');
		} else {
			return response.json();
		}
	};
	useEffect(() => {
		fetchData()
			.then((res) => {
				setThemes(res);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	const updateThemeSelect = (themeSelected: string) => {
		setCheckbox(themeSelected);
	};

	return (
  <>
  <Grid container>
  <Grid item xs={3} className={classes.background_genesis1}>
  <Grid container className={classes.genesislogo}>
  <Grid item xs={12} className={classes.genesislogo1}>
  <img src="./images/genesislogo.png" alt="image not found" />
						</Grid>
					</Grid>
				</Grid>

  <Grid item xs={9} className={classes.pagesMainGrid}>
  <Grid container spacing={2} mt={1}>
  <Grid item xs={12}>
  <Typography color="white" fontSize="1.2rem" ml={3}>
  Select Theme
							</Typography>
						</Grid>
					</Grid>
  <Grid container spacing={4} padding={3}>
  {themes
              && themes.map((theme, index) => (
              	<Grid item xs={4} key={index}>
              		<Grid
              			container
              			display="flex"
              			justifyContent="space-around"
              			spacing={1}
              		>
              			<Grid item xs={11}>
              				<Typography variant="body2" color="white">
              					{theme.name}
                </Typography>
                </Grid>
              			<Grid item xs={1}>
              				<input
              					type="checkbox"
              					checked={checkbox == theme.name}
              					onClick={() => updateTheme(theme.name)}
              					style={{ cursor: 'pointer' }}
              					onChange={() => updateThemeSelect(theme.name)}
                />
                </Grid>
                </Grid>
              		<Grid container spacing={1}>
              			<Grid item xs={12}>
              				<Card>
              					<CardMedia
              						component="img"
              						alt="green iguana"
              						height="170"
              						image={theme.image}
                />
                </Card>
                </Grid>
                </Grid>
                </Grid>
              ))}
  <Grid item xs={12}>
  <Grid container display="flex" justifyContent="flex-end">
  <Grid item xs={2}>
  <Button
  variant="contained"
  size="large"
  onClick={handleCloseTheme}
									>
  Cancel
									</Button>
								</Grid>

  <Grid item xs={1} mr={1}>
  <Button
  variant="contained"
  size="large"
  onClick={handleClickOpen}
									>
  Next
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

  <Dialog
  fullScreen
  open={builderThemes}
  onClose={handleClose}
  TransitionComponent={Transition}
			>
  <BuilderPageSelectComponent
  handleClose={handleClose}
					// getScreenDataSet={getScreenDataSet}
  checkbox={checkbox}
				/>
			</Dialog>
		</>
	);
}

export default BuilderThemeComponent;
