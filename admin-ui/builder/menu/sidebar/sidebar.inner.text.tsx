import DoneIcon from "@mui/icons-material/Done";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch, { Case, Default } from 'react-switch-case';

const TypographyStyle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginTop: "-1.3rem",
  cursor: "pointer",
}));

const SideBarInnerText = ({ ele }) => {
  return (
    <>
      <Switch condition={ele.icon}>
        <Case value="DoneIcon">
          <DoneIcon
            style={{
              fontSize: "1rem",
              color: "#334D6E",
              marginTop: "-1.3rem",
            }}
          />
        </Case>
        <Case value="EditAttributesIcon">
          <EditAttributesIcon
            style={{
              fontSize: "1rem",
              color: "#334D6E",
              marginTop: "-1.3rem",
            }}
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
      <TypographyStyle>
        <Typography
          fontSize={"0.75rem"}
          color={"#334D6E"}>
          {ele.label}
        </Typography>
      </TypographyStyle>
    </>
  );
};

export default SideBarInnerText;
