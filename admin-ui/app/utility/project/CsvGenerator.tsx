import React from "react";
import { CSVLink } from "react-csv";
import { ProjectHomeStyle as style } from "../../project/project.home.style";

const CsvGenerator = ({ projectData }:any) => {
  return (
    <div>
      <CSVLink
        data={projectData}
        filename={`projectData ${new Date().toISOString().slice(0, 10)}`}
        style={style.menubtn}
      >
        CSV
      </CSVLink>
    </div>
  );
};

export default CsvGenerator;
