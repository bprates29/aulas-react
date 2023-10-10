import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            { 
             props.children.map(
                (child) => {
                  return React.cloneElement(child, props)
                }
             ) 
            }
        </div>
    )
}