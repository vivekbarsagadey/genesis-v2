"use client";
import React from "react";
// lets load json file
import genisys from "../data/genisys.json";
import Category from "./menu/menu";

const BuilderHome = ({ id }) => {
  console.log("id at builder >>", id);
  console.log("genisys >>", genisys);

  return (
    <div>
      <Category   genisys={genisys} />
    </div>
  );
};

export default BuilderHome;
