"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  country,
  state
} from "../../../component/common/data/company/companyType";
import ICompany from "../company.model";
import { CompanyStyle as style } from "../companystyle";

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

  return (
    <>
      <form>
        <Box>
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} pb={3}>
              <Typography noWrap>Create Company</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Company Name:</Typography>
              <TextField
                {...register("name")}
                size="small"
                placeholder="Company Name"
                fullWidth
              />
              <p style={style.errormessage}>{errors.name?.message}</p>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Email:</Typography>
              <TextField
                {...register("email")}
                size="small"
                placeholder="Email"
                fullWidth
              />
              <p style={style.errormessage}>{errors.email?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Phone:</Typography>
              <TextField
                {...register("mobile")}
                size="small"
                placeholder="Mobile"
                fullWidth
              />
              <p style={style.errormessage}>{errors.mobile?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Address:</Typography>
              <TextField
                {...register("address")}
                placeholder="Address"
                size="small"
                fullWidth
              />
              <p style={style.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Country:</Typography>
              <FormControl fullWidth size="small">
                <Select>
                  {country?.map((items) => {
                    return (
                      <MenuItem key={items.id} value={items.name}>
                        <CountryDetails items={items} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <p style={style.errormessage}>{errors.country?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>State:</Typography>

              <FormControl fullWidth size="small">
                <Select>
                  {state?.map((c) => {
                    return (
                      <MenuItem key={c.id} value={c.name}>
                        <StateDetails c={c} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <p style={style.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>City:</Typography>
              <TextField
                {...register("city")}
                placeholder="City"
                size="small"
                fullWidth
              />
              <p style={style.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Pincode:</Typography>
              <TextField
                {...register("pincode")}
                placeholder="Pincode"
                size="small"
                fullWidth
              />
              <p style={style.errormessage}>{errors.address?.message}</p>
            </Grid>

            <Grid item xs={12} textAlign="right">
              <Link href={"/company"} passHref>
                <Button variant="contained" style={style.btn}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="contained" style={style.btn}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

const CountryDetails = ({ items }) => {
  return <>{items.label}</>;
};

const StateDetails = ({ c }) => {
  return <>{c.label}</>;
};

export default CompanyComponent;
