import React from "react";

export default function Examples(props){
        if(props.examples){
            return (
              <div>
                <em>"{props.examples}"</em>
              </div>
            );
        }else {
            return null;
        }
}