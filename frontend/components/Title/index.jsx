import React, { useState } from "react";
import s from "./title.styles.module.scss";

function Tiltle({ title }) {
  let words = title.split(" ");
  return (
    <div className={s.six}>
      {/* {
          words.map((word , ind) => {
            if(ind%2!=0){
              return(
                <span className={s.dark}> {word} </span>
              )
            }
            else{
              return(
                <span className={s.light}> {word} </span>
              )
            }
          })
        } */}
      <h1>
        {words[0]} <span style={{color : "#5A68D8"}} >{words[1]}</span>
        <span className={s.tagline} ></span>
      </h1>
    </div>
  );
}

export default Tiltle;
