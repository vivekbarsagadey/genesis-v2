import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import Typography from '@mui/material/Typography';

interface ICreate{items:[]}

const CreateComponent = ({items}:ICreate) => {
  return (
    <div>
        {
                        items.map((item)=>{
                            return(
                            <>
                             <div style={{display:'flex'}}>                           
                            <Checkbox defaultChecked /> <Typography>{item?.label}</Typography>
                            </div>
                            </>)
                        })
                    }
    </div>
  )
}

export default CreateComponent
