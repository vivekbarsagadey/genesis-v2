// import PieChart from "react-pie-graph-chart";
// import { ListComponentProps } from "./props";

// const CustomerGraphView = ({ customer }: ListComponentProps) => {
//   const companyStatus = [
//     {type: "India",value: customer?.filter((item) => item.country ==="India")?.length,color:"#c026d3"},
//     {type: "Australia",value: customer.filter((item) => item.country ==="Australia").length,color: "#030712"},
//     {type: "America",value: customer.filter((item) => item.country === "America").length,color: "#86198f"},
//     {type: "Spain",value: customer.filter((item) => item.country === "Spain").length,color: "#4BA2DA"},
//     {type: "US",value: customer.filter((item) => item.country === "US").length,color: "#F1AF13"},
//     {type: "UK",value: customer.filter((item) => item.country === "UK").length,color: "#1d4ed8"},
//     {type: "Dubai",value: customer.filter((item) => item.country === "Dubai").length,color: "#b91c1c"},
//     {type: "Hong Kong",value: customer.filter((item) => item.country === "Hong Kong").length,color: "#fb923c"},
//     {type: "Pakistan",value: customer.filter((item) => item.country === "Pakistan").length,color: "#4d7c0f"},
//     {type: "Bangladesh",value: customer.filter((item) => item.country === "Bangladesh").length,color: "#00f8e8",},
//     {type: "Srilanka",value: customer.filter((item) => item.country === "Srilanka").length,color: "#1e1b4b"},
//     {type: "Thailand",value: customer.filter((item) => item.country === "Thailand").length,color: "#4c0519"},
//   ];
//   return (
//     <div>
//       <PieChart data={companyStatus} />
//     </div>
//   );
// };

// export default CustomerGraphView;

import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
const customerData = [{ customerName: "Customer" }];
const CustomerGraphView = () => {
  return (
    <Paper elevation={3}>
      <Grid container mt={2}  p={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              size="small"
              options={customerData?.map((option) => option.customerName)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  placeholder="Select Graph View"
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomerGraphView;
