import React from "react";

import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ICompany, Status } from "../models";
import { ListComponentProps } from "./props";

const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));

type IActiveCompany = {
  activeCompany: ICompany;
};
type INewCompany = {
  newCompany: ICompany;
};
type IInActiveCompany = {
  inActiveCompany: ICompany;
};
const CompanyKanbanView = ({ companies }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[0];
  });
  const activeCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[1];
  });
  const inActiveCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[2];
  });

  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">NEW</Typography>
                {newCompanies?.map((newCompany, index) => {
                  return (
                    <NewCompanyComponent newCompany={newCompany} key={index} />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">ACTIVE</Typography>
                {activeCompanies?.map((activeCompany, index) => {
                  return (
                    <ActiveCompanyComponent
                      activeCompany={activeCompany}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">INACTIVE</Typography>

                {inActiveCompanies?.map((inActiveCompany, index) => {
                  return (
                    <InActiveCompanyComponent
                      inActiveCompany={inActiveCompany}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
      </Grid>
    </>
  );
};

const NewCompanyComponent = ({ newCompany }: INewCompany) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Company - {newCompany.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {newCompany.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};
const ActiveCompanyComponent = ({ activeCompany }: IActiveCompany) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Company - {activeCompany.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {activeCompany.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};
const InActiveCompanyComponent = ({ inActiveCompany }: IInActiveCompany) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Company - {inActiveCompany.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {inActiveCompany.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};

export default CompanyKanbanView;
