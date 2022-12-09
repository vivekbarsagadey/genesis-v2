///////page.tsx//////
"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid/Grid";
import CreateComponent from ".";
const steps = [
  {
    label: "Basic configuration",
    configuration: [
        {
            id:1,
            label:"Logo"
        },
        {
            id:2,
            label: "Title"
        }
    ]
  },
  {
    label: "Advance configration",
    configuration: [
        {
            id:1,
            label:"Header"
        },
        {
            id:2,
            label:"Sidebar"
        },
        {
            id:3,
            label:"Main Containt"
        },
        {
            id:4,
            label:"Footer"
        },
        {
            id:5,
            label:"Template"
        },
    ],
  },
  {
     label: "Modules",
     configuration: [
    {
        id:1,
        label:"Splash Screen"
    },
    {
        id:2,
        label:"Login"
    },
    {
        id:3,
        label:"Create Acoount"
    },
    {
        id:4,
        label:"Home Screen"
    },
    {
        id:5,
        label:"Header"
    },
    {
        id:6,
        label:"Footer"
    },
    {
        id:7,
        label:"Setting"
    },
    {
        id:8,
        label:"Profile"
    },
    {
        id:9,
        label:"Product"
    },
    {
        id:10,
        label:"Notification"
    },
    {
        id:11,
        label:"Search"
    },
   
   
],
},
{
    label: "Review",
    configuration: [
        {
            id:1,
            label:"r"
        },
        {
            id:2,
            label: "Title"
        }
    ]
  },
 
]

const page = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent={"center"}>
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 3? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <CreateComponent items={step.configuration} />
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
