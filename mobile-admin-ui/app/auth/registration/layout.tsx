"use client";
import React, { useState , useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body :{
    backgroundImage : 'url("../../../images/login_background_image.png")',
    
  }
});

export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const classes = useStyles();
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return (
      <html>
        <head />
        <body >
        </body>
      </html>
    )
  }
  return (
    <html>
      <head />
      <body className={classes.body}>
      <div>
          {children}
        </div>
      </body>
    </html>

  );
}
