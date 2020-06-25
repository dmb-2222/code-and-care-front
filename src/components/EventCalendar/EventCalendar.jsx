import React, { useRef } from "react";
// import style from "./EventCalendar.module.css";
import calcPositionEvent from "../../helpers/calcPosition";
import styled from "styled-components";

const FirstEvent = styled.div`
  position: absolute;
  border-left: 1px solid #91b5da;
  padding-left: 2px;
  /* background-color: #e2ecf5; */
  background-color:red;
  transform: translateY(${(props) => props.transform}px);
  left: ${(props) => props.transformX}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    white-space: normal;
    overflow: visible;
    background-color: #f2f5f8;
    font-size: 12px;
  }
`;
const EventCalendar = ({ title, start, duration, right, width }) => {
  const { transform, height } = calcPositionEvent(start, duration);

  const refDiv = useRef(null);
  // console.log(refDiv);

  return (
    <>
      <FirstEvent
        ref={refDiv}
        transform={transform}
        height={height}
        width={width}
        transformX={right ? 93 : 0}
      >
        {title}
      </FirstEvent>
    </>
  );
};

export default EventCalendar;
