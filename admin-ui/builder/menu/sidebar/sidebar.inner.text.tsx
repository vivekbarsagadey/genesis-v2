import { Typography,ListItemIcon } from "@mui/material";
import Switch, { Case, Default } from "react-switch-case";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EmailIcon from "@mui/icons-material/Email";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import LabelIcon from "@mui/icons-material/Label";
import LockClockIcon from "@mui/icons-material/LockClock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DoneIcon from '@mui/icons-material/Done';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
const SideBarInnerText = ({ ele }) => {
  return (
    <>
  
            <Switch condition={ele.icon}>
              <Case value="DoneIcon">
                <DoneIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",marginTop: "-1.3rem",}}
                />
              </Case>
              <Case value="EditAttributesIcon">
                <EditAttributesIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",marginTop: "-1.3rem",}}
                />
              </Case>
              <Default>
                {" "}
                <FormatColorTextIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "-1.3rem",
                  }}
                />
              </Default>
            </Switch>

      <Typography
        fontSize={"0.75rem"}
        color={"#334D6E"}
        style={{
          cursor: "pointer",
          marginLeft: "1.5rem",
          marginTop: "-1.3rem",
        }}
      >
        {ele.label}
      </Typography>
    </>
  );
};

export default SideBarInnerText;
