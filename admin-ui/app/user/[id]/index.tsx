"use client";
import React from "react";
import IUser from "../user.model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createUser, updateUser } from "../services/UserServices";

const country = [
  { id: 1, name: "India", label: "India" },
  { id: 2, name: "Australia", label: "Australia" },
  { id: 3, name: "America", label: "America" },
  { id: 4, name: "Spain", label: "Spain" },
  { id: 5, name: "US", label: "US" },
  { id: 5, name: "UK", label: "UK" },
];
const state = [
  { id: 1, name: "Bihar", label: "Bihar" },
  { id: 2, name: "Maharastra", label: "Maharastra" },
  { id: 3, name: "MP", label: "MP" },
  { id: 4, name: "UP", label: "UP" },
  { id: 5, name: "GOA", label: "GOA" },
  { id: 6, name: "Assam", label: "Assam" },
  { id: 7, name: "Kerala", label: "Kerala" },
];

const useStyles = makeStyles({
  errormessage: {
    fontSize: "0.75rem",
    color: "red",
  },
  container:{
    background:'#F5F5F5',
    height:'91vh',
    paddingLeft:'1rem',
    paddingTop:'1rem',
   
  },
  card:{
    background: "white",
    width: "98.5%", 
    borderRadius:'8px'
  }
});
interface IUserProp {
  user: IUser | undefined;
}

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    mobile: yup
      .string()
      .required("Mobile Number is Required")
      .min(10, "Enter 10-digit Mobile Number")
      .max(10, "Enter Number that's 10 or Less"),
    pinCode: yup.string().required("Pin Code is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("state is required"),
    email: yup
      .string()
      .email("This must be a email")
      .required("Email is required"),
  })
  .required();

const UserComponent = ({ user }: IUserProp) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      mobile: user?.mobile,
      address: user?.address,
      email: user?.email,
      country: user?.country,
      state: user?.state,
      pinCode: user?.pinCode,
    },
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (user?._id) {
      try {
        const newUser = {
          _id: user?._id,
          firstName: data?.firstName,
          lastName: data?.lastName,
          address: data?.address,
          email: data?.email,
          mobile: data?.mobile,
          country: data?.country,
          state: data?.state,
          pinCode: data?.pinCode,
        };
        await updateUser(newUser);
        router.push("/user");
      } catch (error) {}
    } else {
      try {
        const _user = {
          firstName: data?.firstName,
          lastName: data?.lastName,
          mobile: data?.mobile,
          address: data?.address,
          email: data?.email,
          country: data?.country,
          state: data?.state,
          pinCode: data?.pinCode,
        };
        await createUser(_user);
        router.push("/user");
      } catch (error) {
      }
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" pb={3}>Create Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.card}p={4}>
          <Grid item xs={12} mb={3} pl={1}>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>First Name</Typography>
            <TextField fullWidth {...register("firstName")} size="small" />
            <p className={classes.errormessage}>{errors.firstName?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>Last Name</Typography>
            <TextField fullWidth {...register("lastName")} size="small" />
            <p className={classes.errormessage}>{errors.lastName?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>Email</Typography>
            <TextField
              type="email"
              fullWidth
              {...register("email")}
              size="small"
            />
            <p className={classes.errormessage}>{errors.email?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>Mobile</Typography>
            <TextField fullWidth {...register("mobile")} size="small" />
            <p className={classes.errormessage}>{errors.mobile?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>Address</Typography>
            <TextField fullWidth {...register("address")} size="small" />
            <p className={classes.errormessage}>{errors.address?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>State</Typography>
            <FormControl fullWidth size="small">
              <Select
                onChange={(e) =>
                  setValue("state", e.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                {state.map((f) => {
                  return (
                    <MenuItem key={f.id} value={f.name}>
                      {f.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <span className={classes.errormessage}>
              {errors.country?.message}
            </span>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>Country</Typography>
            {/* <TextField fullWidth {...register("country")} size="small" />
            <p className={classes.errormessage}>{errors.country?.message}</p> */}

            <FormControl fullWidth size="small">
              <Select
                onChange={(e) =>
                  setValue("country", e.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                {country.map((k) => {
                  return (
                    <MenuItem key={k.id} value={k.name}>
                      {k.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <span className={classes.errormessage}>
              {errors.country?.message}
            </span>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
            <Typography>PinCode</Typography>
            <TextField fullWidth {...register("pinCode")} size="small" />
            <p className={classes.errormessage}>{errors.pinCode?.message}</p>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mt={2} pl={1} pr={1}>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Link href={"/user"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{ textTransform: "capitalize",background:'#FFC107' }}
                  >
                    Close
                  </Button>
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    textTransform: "capitalize",
                    background:'#FFC107'
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UserComponent;
