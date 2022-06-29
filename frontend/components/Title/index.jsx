import React, { useState } from "react";
import s from "./title.styles.module.scss";

function Tiltle({ title }) {
  let words = title.split(" ");
  return (
    <div className={s.six}>
      <h1>
        {words[0]} <span>{words[1]}</span>
        <span className={s.tagline} ></span>
      </h1>
    </div>
  );
}

export default Tiltle;
