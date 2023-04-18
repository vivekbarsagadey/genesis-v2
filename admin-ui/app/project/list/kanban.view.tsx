import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Status } from "../models";
import IProject from "../project.model";
import { ListComponentProps } from "./props";

const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));

type IActiveProject = {
  activeProject: IProject;
};
type IInActiveProject = {
  inActiveProject: IProject;
};
const ProjectKanbanView = ({ projects }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const activeCompanies = projects.filter((ele: IProject) => {
    return ele.status == statusSet[0];
  });
  const inActiveProject = projects.filter((ele: IProject) => {
    return ele.status == statusSet[1];
  });

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined">
              <CardContent>
                <Typography variant="h6">ACTIVE</Typography>
                {activeCompanies?.map((activeProject, index) => {
                  return (
                    <ActiveCompanyComponent
                      activeProject={activeProject}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined">
              <CardContent>
                <Typography variant="h6">INACTIVE</Typography>
                {inActiveProject?.map((inActiveProject, index) => {
                  return (
                    <InActiveProjectComponent
                      inActiveProject={inActiveProject}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
      </Grid>
    </Box>
  );
};

const ActiveCompanyComponent = ({ activeProject }: IActiveProject) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          Company Name - {activeProject.customerName}
        </Typography>
        <Typography noWrap variant="h5">
          Status - {activeProject.status}
        </Typography>
      </Paper>
    </Box>
  );
};
const InActiveProjectComponent = ({ inActiveProject }: IInActiveProject) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          Company Name - {inActiveProject.customerName}
        </Typography>
        <Typography noWrap variant="h5">
          Status - {inActiveProject.status}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProjectKanbanView;
