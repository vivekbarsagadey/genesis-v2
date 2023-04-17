import { Box, Grid } from "@material-ui/core";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Case, Switch } from "react-if";
import { ProjectContext } from "..";
import ButtonBuilderComponent from "./builder.component/button.builder.component";
import CheckboxComponent from "./builder.component/checkbox.component";
import CnfPasswordComponent from "./builder.component/cnf.password.component";
import DropdownComponent from "./builder.component/dropdown.component";
import EmailComponent from "./builder.component/email.component";
import NumberComponent from "./builder.component/number.component";
import PasswordComponent from "./builder.component/password.component";
import TextComponent from "./builder.component/text.component";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ScreenSelectComponent = ({ screenToggle, gridVal, componentVal }) => {
  const value = React.useContext(ProjectContext);

  return (
    <>
      <Switch>
        <Case condition={screenToggle === "screen1"}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={9}>
              <Box mt={2}>
                <Paper
                  variant="outlined"
                  style={{ height: "75vh", overflowY: "scroll" }}
                >
                  <Grid container spacing={1}>
                    {gridVal?.map((val, indexOuter) => {
                      return (
                        <Switch key={indexOuter}>
                          <Case condition={val === "grid_1x12"}>
                            <Grid item xs={12}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x6"}>
                            <Grid item xs={6}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x4"}>
                            <Grid item xs={4}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x3"}>
                            <Grid item xs={3}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x2"}>
                            <Grid item xs={2}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x1"}>
                            <Grid item xs={1}>
                              <Item>
                                {componentVal?.map((data, indexInner) => {
                                  return (
                                    <div key={indexInner}>
                                      {(() => {
                                        if (indexOuter == indexInner) {
                                          return (
                                            <Switch>
                                              <Case
                                                condition={data === "buttons"}
                                              >
                                                <ButtonBuilderComponent />
                                              </Case>
                                              <Case
                                                condition={data === "emails"}
                                              >
                                                <EmailComponent />
                                              </Case>
                                              <Case
                                                condition={data === "passwords"}
                                              >
                                                <PasswordComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "cnfrmpasswords"
                                                }
                                              >
                                                <CnfPasswordComponent />
                                              </Case>
                                              <Case
                                                condition={data === "numbers"}
                                              >
                                                <NumberComponent />
                                              </Case>
                                              <Case
                                                condition={
                                                  data === "checkboxes"
                                                }
                                              >
                                                <CheckboxComponent />
                                              </Case>
                                              <Case
                                                condition={data === "dropdowns"}
                                              >
                                                <DropdownComponent />
                                              </Case>
                                              <Case condition={data === "text"}>
                                                <TextComponent />
                                              </Case>
                                            </Switch>
                                          );
                                        }

                                        return null;
                                      })()}
                                    </div>
                                  );
                                })}
                              </Item>
                            </Grid>
                          </Case>
                        </Switch>
                      );
                    })}
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Case>

        {/* <Case condition={screenToggle === "screen2"}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Box mt={2}>
                  <Paper variant="outlined">Screen 2</Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Case> */}
      </Switch>
    </>
  );
};

export default ScreenSelectComponent;
