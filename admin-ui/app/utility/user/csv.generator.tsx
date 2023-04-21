import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { IUser } from "../../user/models";

type UserProps = {
  copyUserData: Array<IUser>;
};

const UserCsvGenerator = ({ copyUserData }: UserProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyUserData}
        filename={`user-list-${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default UserCsvGenerator;
