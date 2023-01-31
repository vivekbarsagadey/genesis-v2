"use client";
import React, { useState } from "react";

interface ErrorComponentPropes{
    message : string
}


const ErrorComponent = ({message}:ErrorComponentPropes)=>{
    return <>{message}</>
}



export {ErrorComponent}