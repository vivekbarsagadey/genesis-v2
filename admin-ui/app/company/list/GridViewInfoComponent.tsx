import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ICompany from "../company.model";
import ICompanyComponentProps from "../company.props";
import { CompanyStyle as style } from "../companystyle";

interface GridViewInfoComponentProps extends ICompanyComponentProps {
  c: ICompany;
  show: boolean;
}

const GridViewInfoComponent = ({ c, checked }: any) => {
  const [show, setShow] = useState(checked);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    setShow(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow(event.target.checked);
  };

  return (
    <>
      <Box>
        <Grid container style={style.expandIcon}>
          <Grid item xs={12} lg={1} sm={1} md={1}>
            <Checkbox checked={show} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={2.5}
            lg={2.5}
            sm={2.5}
            md={2.5}
            style={style.expandIcon}
          >
            <Typography fontSize="small" noWrap>
              {c.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2.5}
            lg={2.5}
            sm={2.5}
            md={2.5}
            style={style.expandIcon}
          >
            <Typography fontSize="small" noWrap>
              {c.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2.5}
            lg={2.5}
            sm={2.5}
            md={2.5}
            style={style.expandIcon}
          >
            <Typography fontSize="small" noWrap>
              {c.mobile}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2.5}
            lg={2.5}
            sm={2.5}
            md={2.5}
            style={style.expandIcon}
          >
            <Typography fontSize="small" noWrap>
              {c.address}
            </Typography>
          </Grid>
          <Grid item xs={1} lg={1} sm={1} md={1}>
            {show && (
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            )}

            <Link href={`/company/${c._id}`}>
              <Tooltip title="Edit">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GridViewInfoComponent;
