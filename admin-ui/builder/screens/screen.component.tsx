import React, { useEffect } from "react";
import { Button, Chip, Grid, Paper, Stack } from "@mui/material";

const ScreenComponent = ({ updateScreen, handleDelete }) => {
  const [screenInfo, setScreenInfo] = React.useState([]);
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/screens`);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setScreenInfo(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <Grid container style={{ background: "#1e293b", padding: "0.3rem" }}>
        <Grid item xs={11}>
          <Stack direction="row" spacing={1}>
            {screenInfo?.map((data, index) => {
              return (
                <Chip
                  key={index}
                  label={`${data.name}`}
                  variant="outlined"
                  onClick={() => updateScreen("screen1")}
                  onDelete={handleDelete}
                  style={{ background: "#e2e8f0" }}
                />
              );
            })}

            {/* <Chip
            label="Screen 2"
            variant="outlined"
            onClick={() => updateScreen("screen2")}
            onDelete={handleDelete}
            style={{ background: "#e2e8f0" }}
          /> */}
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            size="small"
            style={{ height: "4vh", marginTop: "0.2rem" }}
          >
            New
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ScreenComponent;
