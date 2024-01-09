import React from "react";
import PropTypes from "prop-types";
const DisplayData=({StaticData,DynamicData})=>{
return(
    <div>
        <h1>Static Data:</h1>
        <p>{StaticData}</p>
        <h1>Dynamic Data:</h1>
        <p>{DynamicData}</p>
    </div>
)
}
export default DisplayData;