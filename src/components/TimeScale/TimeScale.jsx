import React from "react";
import style from "./TimeScale.module.css";

const TimeScale = ({ time }) => (
  <>
    <div className={style.time} >{time}</div>
  </>
);

export default TimeScale;
