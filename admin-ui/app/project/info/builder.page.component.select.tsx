import React, { useEffect, useState } from 'react';
import {
  Button, Card, Grid, Typography,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  background_genesis1: {
    backgroundImage: `url(${'./images/genesis1.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '120vh',
    backgroundPosition: 'center',
    position: 'relative',
  },
  genesisLogo: {
    height: '300px',
    width: '290px',
    position: 'relative',
  },
  genesisLogo1: {
    position: 'absolute',
    top: '50%',
    left: '45%',
    margin: '-50px 0 0 -50px',
  },
  pagesMainGrid: {
    background: '#0f172a',
    height: '120vh',
  },
});
type iBuilderProps = {
  handleClose: () => void;
  checkbox: string;
  handleCloseTheme: () => void;
  id:string
};

function BuilderPageSelectComponent({
  handleClose, checkbox, handleCloseTheme, id,
}: iBuilderProps) {
  const classes = useStyles();
  const [, setBlankPage] = useState(false);
  const [, setLoginPage] = useState(false);
  const [, setProfilePage] = useState(false);
  const [, setHomePagePage] = useState(false);
  const [, setEditProfilePage] = useState(false);
  const [, setSignUpPage] = useState(false);
  const [, setSideMenuPage] = useState(false);
  const [, setSettingPage] = useState(false);
  const [pages, setPages] = React.useState([]);

  const [count, setCount] = useState<string[]>([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`);
    if (!response.ok) {
      throw new Error('Data cloud not be fetched!');
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setPages(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const updatePage = (pageRecv: string) => {
    if (pageRecv === 'Blank') {
      setBlankPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Login In') {
      setLoginPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Profile') {
      setProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Home Page') {
      setHomePagePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Edit Profile') {
      setEditProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Sign Up') {
      setSignUpPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Side Menu') {
      setSideMenuPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === 'Setting') {
      setSettingPage((s) => !s);
      setCount([...count, pageRecv]);
    }
  };
  const projectJsonData = {
    theme: checkbox,
    pages: count,
    projectId: id,
  };

  const savePages = async () => {
    // try {
    //   const body = {
    //     projectJson: {
    //       theme: checkbox,
    //       page: count,
    //     },
    //   };
    //   await createPage(body);
    // } catch (error) {
    //   console.error(error);
    // }
    localStorage.setItem('projectJsonData', JSON.stringify(projectJsonData));
    handleClose();
    handleCloseTheme();
  };

  // console.log('Pages >>>', count);
  // console.log('Theme Value >>', checkbox);
  // console.log('Project ID >>>', id);
  // console.log("pages>>>", pages);

  return (
    <Grid container>
      <Grid item xs={3} className={classes.background_genesis1}>
        <Grid container className={classes.genesisLogo}>
          <Grid item xs={12} className={classes.genesisLogo1}>
            <img src="./images/genesisLogo.png" alt=" " />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={9} className={classes.pagesMainGrid}>
        <Grid container spacing={4} padding={3}>
          {pages
            && pages.map((page:any) => (
              <Grid item xs={3}>
                <Grid container display="flex" justifyContent="space-around">
                  <Grid item xs={9}>
                    <Typography variant="body2" color="white">
                      {page.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Checkbox
                      onClick={() => updatePage(page.name)}
                      style={{ color: 'white' }}
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="260"
                        image={page.image}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12}>
          <Grid container display="flex" justifyContent="flex-end">
            <Grid item xs={2}>
              <Button variant="contained" size="large" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>

            <Grid item xs={1} mr={1}>
              <Button variant="contained" size="large" onClick={savePages}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BuilderPageSelectComponent;
