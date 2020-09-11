import React, { Children } from "react";
import ClipLoader from "react-spinners/ClockLoader";
export default  () =>(<div className="sweet-loading" style={{marginTop:"3rem",marginBottom:"1.5rem"}}>
    <ClipLoader
       css={{}}
        size={200}
        color={"#ffffffbd"}
        loading={true}
    />
</div>)