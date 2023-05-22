<<<<<<< HEAD
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ICompany } from '../models/company.model';
import Moment from 'react-moment';
import moment from 'moment';
interface CompanySearchComponentProps {
  companies: Array<ICompany>;
  onSearchHandler: (_: Array<ICompany>) => void;
}

function CompanySearchDetails({companies,onSearchHandler,}: CompanySearchComponentProps) {

  const [searchStr, setSearchStr] = useState<string>('');
  const filterBySearchValue = (value: string) => (f: ICompany): boolean =>
    f.name?.toLowerCase().includes(value.toLowerCase()) ||
    f.email.toLowerCase().includes(value.toLowerCase()) ||
    f.mobile.toLowerCase().includes(value.toLowerCase()) ||
    f.status.toLowerCase().includes(value.toLowerCase()) ||
    moment(f.createdAt).format("MMMM Do YYYY").toLowerCase().includes(value.toLowerCase()) ||
    f?.address.toLowerCase().includes(value.toLowerCase());
=======
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {ICompany} from "../models/company.model";

interface CompanySearchComponentProps {
  companies: Array<ICompany>;
  onSearchHandler: (_: Array<ICompany>) => void;
}

const CompanySearchDetails = ({
  companies,
  onSearchHandler,
}: CompanySearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (name: string) =>  (f: ICompany): boolean => f.name.toLowerCase().includes(name.toLowerCase());
>>>>>>> dev

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
<<<<<<< HEAD
    if (_searchValue == '') {
      onSearchHandler(companies);
      return;
    }
    onSearchHandler(companies.filter(filterBySearchValue(_searchValue)));
=======
    if (_searchValue == "") {
      onSearchHandler(companies);
      return;
    }
    onSearchHandler(companies.filter(filterByName(_searchValue)));
>>>>>>> dev
  };
  return (
<<<<<<< HEAD
    <Grid item xs={12}>
      <TextField
        placeholder="Search Here..."
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
=======
    <div>
      <Grid item xs={12}>
        <TextField
          placeholder="Search by Company Name"
          size="small"
          value={searchStr}
          onChange={onSearch}
          fullWidth
        />
      </Grid>
    </div>
>>>>>>> dev
  );
}
export default CompanySearchDetails;
