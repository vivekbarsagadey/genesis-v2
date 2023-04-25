import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { IRole } from "../../roles/models";


type RoleProps = {
  copyRoles: Array<IRole>;
};

const RoleCsvGenerator = ({ copyRoles }: RoleProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyRoles}
        filename={`roles-list-${new Date().toISOString().slice(0, 10)}`}
        style={{textDecoration:'none',color:'black'}}>
        CSV
      </CSVLink>
    </Typography>
  );
};

export default RoleCsvGenerator;
