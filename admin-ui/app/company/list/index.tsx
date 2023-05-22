"use client";
import React, { useState } from "react";
import ICompanyComponentProps from "../company.props";
import Grid from "@mui/material/Grid";
import InfoComponent from "../info";

import Pagination from "@mui/material/Pagination";
import usePagination from "./pagination";

interface ListComponentProps extends ICompanyComponentProps {}
const GridViewComponent = ({ items }: ListComponentProps) => {
  
  
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = usePagination(items, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Grid container spacing={2}>
        {_DATA.currentData()?.map((item) => {
          return <InfoComponent key={item._id} item={item} />;
        })}
      </Grid>

      <Grid container style={{display:'flex',justifyContent:'flex-end',position:'relative'}} pt={2}>
        <div style={{position:'fixed'}}>
          <Pagination
            count={count}
            size="medium"
            page={page}
            color="primary"
            variant="outlined"
            onChange={handleChange}
          />
       </div>
      </Grid>
    </>
  );
};
export default GridViewComponent;
