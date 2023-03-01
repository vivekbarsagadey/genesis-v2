import React from "react";
import { CSVLink } from "react-csv";
import { ProjectHomeStyle as style } from "../project/ProjectHomeStyle";

const CsvGenerator = ({ project }:any) => {
  return (
    <div>
      <CSVLink
        data={project}
        filename={`Project ${new Date().toISOString().slice(0, 10)}`}
        style={style.menubtn}
      >
        CSV
      </CSVLink>
    </div>
  );
};

export default CsvGenerator;
