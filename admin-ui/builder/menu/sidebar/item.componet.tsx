import React from "react";

const ItemComponet = ({ d }) => {
  return <div> {d.label}  
  
  
  {d.items?.map( (ele)=>{
    return(
        <div>
           -- {ele.label}
        </div>
    )
  }  )}
  
  </div>;
};

export default ItemComponet;
