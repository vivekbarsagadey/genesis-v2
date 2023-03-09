"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import IUser from "../user.model";

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
    register,formState: { errors },
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

  return (
    <div>
      <Typography variant="h6" pb={3}>
        Create Form
      </Typography>

      <Grid container p={4}>
        <Grid item xs={12} mb={3} pl={1}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>First Name</Typography>
          <TextField fullWidth {...register("firstName")} size="small" />
          <p>{errors.firstName?.message}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Last Name</Typography>
          <TextField fullWidth {...register("lastName")} size="small" />
          <p>{errors.lastName?.message}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Email</Typography>
          <TextField
            type="email"
            fullWidth
            {...register("email")}
            size="small"
          />
          <p>{errors.email?.message}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Mobile</Typography>
          <TextField fullWidth {...register("mobile")} size="small" />
          <p>{errors.mobile?.message}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Address</Typography>
          <TextField fullWidth {...register("address")} size="small" />
          <p>{errors.address?.message}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>State</Typography>

          <span>{errors.country?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Country</Typography>
          <span>{errors.country?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>PinCode</Typography>
          <TextField fullWidth {...register("pinCode")} size="small" />
          <p>{errors.pinCode?.message}</p>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} mt={2} pl={1} pr={1}>
          <Grid container>
            <Grid
              item
              xs={12}
             
            >
              <Link href={"/user"}>
                <Button variant="contained">Close</Button>
              </Link>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserComponent;
