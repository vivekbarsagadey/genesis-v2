import { Grid, ListItemIcon, Typography } from "@mui/material";
import Switch, { Case, Default } from "react-switch-case";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

const BuilderSideBarInnerText = ({ ele }) => {
  return (
    <Grid container display="flex">
      <Grid item xs={3}>
          <ListItemIcon>
            <Switch condition={ele.icon}>
              <Case value="SmartDisplayIcon">
                <SmartDisplayIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",

                  }}
                />
              </Case>

              <Default>
                <FiberSmartRecordIcon
                  color="primary"
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",

                  }}
                />
              </Default>
            </Switch>
          </ListItemIcon>
        </Grid>
      <Grid item xs={9}>
        <Typography
          color={"#334D6E"}
          style={{
            cursor: "pointer",
            marginLeft: "1.5rem",
            fontSize: "0.8rem"
          }}
        >
          {ele.label}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BuilderSideBarInnerText;
