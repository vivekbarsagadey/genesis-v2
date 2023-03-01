"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ICompany from "../company.model";
import { createCompany, updateCompany } from "../services/CompanyServices";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles({
  errormessage: {
    marginTop: "0",
    color: "red",
    fontWeight: "lighter",
    fontSize: "15px",
  },
  buttons: {
    textDecoration: "none !important",
  },
  box: {
    // background:'#E5E5E5',
  },
});

const country = [
  { id: 1, name: "India", label: "India" },
  { id: 2, name: "Australia", label: "Australia" },
  { id: 3, name: "America", label: "America" },
  { id: 4, name: "Spain", label: "Spain" },
  { id: 5, name: "US", label: "US" },
  { id: 5, name: "UK", label: "UK" },
];

const state = [
  { id: 1, name: "Maharastra", label: "Maharastra" },
  { id: 2, name: "Rajasthan", label: "Rajasthan" },
  { id: 3, name: "Madhya Pradesh", label: "Madhya Pradesh" },
  { id: 4, name: "Uttar Pradesh", label: "Uttar Pradesh" },
  { id: 5, name: "GOA", label: "GOA" },
  { id: 6, name: "Assam", label: "Assam" },
  { id: 7, name: "Kerala", label: "Kerala" },
];

interface ICompanyProp {
  company: ICompany | undefined;
}

const schema = yup
  .object({
    name: yup.string().required("Comapany Name is required"),
    mobile: yup
      .string()
      .required("Mobile Number is Required")
      .min(10, "Enter 10-digit Mobile Number")
      .max(10, "Enter Number that's 10 or Less"),
    address: yup.string().required("Address is required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is required"),
    country: yup.string().required("Country Name is required"),
    state: yup.string().required("State Name is required"),
    city: yup.string().required("City Name is required"),
    pincode: yup.string().required("Pincode is required"),
  })
  .required();

const CompanyComponent = ({ company }: ICompanyProp) => {
  const classes = useStyles();

  const [create, setCreate] = React.useState(false);

  const handleCreate = () => {
    setCreate(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCreate(false);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: company?.name,
      mobile: company?.mobile,
      address: company?.address,
      email: company?.email,
      country: company?.country,
      state: company?.state,
      city: company?.city,
      pincode: company?.pincode,
    },
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (company?._id) {
      try {
        const newCompany = {
          _id: company?._id,
          name: data?.name,
          address: data?.address,
          email: data?.email,
          mobile: data?.mobile,
          country: data?.country,
          state: data?.state,
          city: data?.city,
          pinCode: data?.pincode,
        };
        await updateCompany(newCompany);
        router.push("/company");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const _company = {
          name: data?.name,
          mobile: data?.mobile,
          address: data?.address,
          email: data?.email,
          country: data?.country,
          state: data?.state,
          city: data?.city,
          pinCode: data?.pincode,
        };
        await createCompany(_company);
        router.push("/company");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.box}>
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} pb={3}>
              <Typography fontWeight="bold" fontSize="30px" noWrap>
                Create Company
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Company Name:</Typography>
              <TextField
                {...register("name")}
                size="small"
                placeholder="Company Name"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.name?.message}</p>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Email:</Typography>
              <TextField
                {...register("email")}
                size="small"
                placeholder="Email"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.email?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Phone:</Typography>
              <TextField
                {...register("mobile")}
                size="small"
                placeholder="Mobile"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.mobile?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Address:</Typography>
              <TextField
                {...register("address")}
                placeholder="Address"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Country:</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) =>
                    setValue("country", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                >
                  {country.map((c) => {
                    return (
                      <MenuItem key={c.id} value={c.name}>
                        {c.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <p className={classes.errormessage}>{errors.country?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>State:</Typography>

              <FormControl fullWidth size="small">
                <Select
                  onChange={(event) =>
                    setValue("state", event.target.value, {
                      shouldValidate: true,
                    })
                  }
                >
                  {state.map((c) => {
                    return (
                      <MenuItem key={c.id} value={c.name}>
                        {c.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>City:</Typography>
              <TextField
                {...register("city")}
                placeholder="City"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Pincode:</Typography>
              <TextField
                {...register("pincode")}
                placeholder="Pincode"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>

            <Grid item xs={12} textAlign="right">
              <Link href={"/company"} className={classes.buttons}>
                <Button
                  variant="contained"
                  style={{ marginRight: "4px", background: "#FFC107" }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                onClick={handleCreate}
                style={{ background: "#FFC107" }}
              >
                Submit
              </Button>

              <Snackbar
                open={create}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Sucessfully...
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default CompanyComponent;
