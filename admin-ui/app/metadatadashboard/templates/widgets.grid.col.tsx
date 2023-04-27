import React from 'react'

const WidgetsGridCol = ({ val }: any) => {




  return (
    <div>


      {() => {
        for (var i = 1; i <= val; i++) {
          return(
            <h1>Hello World</h1>
          )
        }
      }}
    </div>
  )
}




export default WidgetsGridCol