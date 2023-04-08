import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Property from '../../app/template/property-component/Property';

const Properties = () => {
    const[sectionType, setSectionType]= useState<string>('')
    const updateSection=(typeRecv : string)=>{
        setSectionType(typeRecv)
    }
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Button   onClick={()=>updateSection("properties")} >properties</Button>
          <Button onClick={()=>updateSection("css")}>css</Button>
          <Button onClick={()=>updateSection("model")}>model</Button>
          <Button  onClick={()=>updateSection("api")}>api</Button>
        </Grid>

        {/* react if switch case  */}
        {
            (()=>{
                switch(sectionType){

                    case "properties":
                        return <Grid item xs={12}>Properties</Grid>
                    case "css":
                        return <Grid item xs={12}>css</Grid>
                    case "model":
                        return <Grid item xs={12}>model</Grid>
                    case "api":
                        return <Grid item xs={12}>api</Grid>
                }
            })
        }
       
      </Grid>
       {sectionType}
    </div>
  );
};

export default Properties;
