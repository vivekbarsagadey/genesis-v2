import React from "react";
import ItemComponet from "./item.componet";

const CategorieComponent = ({ menu }) => {
    
  return <div>
    {menu.name}

    {menu.items.map(  (d)=>{

        return (
            <div  key={d.id} >

             <ItemComponet    d={d} />
                
            </div>
        )

    }  )}
  
  
  </div>;
};

export default CategorieComponent;
