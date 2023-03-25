import React from "react";
import { ListComponentProps } from "./props";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid/Grid";
import { ICompany } from "../models";

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
  const newCompanies = companies.filter((ele: ICompany) => {
    return ele.status === "NEW";
  });
  const activeCompanies = companies.filter((ele: ICompany) => {
    return ele.status === "ACTIVE";
  });
  const inActiveCompanies = companies.filter((ele: ICompany) => {
    return ele.status === "INACTIVE";
  });

  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
      </Grid>
    </>
  );
};

const NewCompanyComponent = ({ newCompany }: INewCompany) => {
  return (
    <Card >
      <CardContent>{newCompany.status}</CardContent>
    </Card>
  );
};
const ActiveCompanyComponent = ({ activeCompany }: IActiveCompany) => {
  return (
    <Card>
      <CardContent>{activeCompany.status}</CardContent>
    </Card>
  );
};
const InActiveCompanyComponent = ({ inActiveCompany }: IInActiveCompany) => {
  return (
    <Card>
      <CardContent>{inActiveCompany.status}</CardContent>
    </Card>
  );
};

export default CompanyKanbanView;
