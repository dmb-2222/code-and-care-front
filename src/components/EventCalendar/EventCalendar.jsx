import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/task/taskOperations";
import {calcPositionEvent} from "../../helpers/calcPosition";
import styled from "styled-components";

const Event = styled.div.attrs((props) => ({
  "data-task": props.taskId,
}))`
  position: absolute;
  border-left: 1px solid #91b5da;
  padding-left: 2px;
  background-color: #e2ecf5;
  transform: translateY(${(props) => props.transform}px);
  left: ${(props) => props.transformX}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    button {
      opacity: 1;
    }
    white-space: normal;
    overflow: visible;
    background-color: #f2f5f8;
    font-size: 12px;
  }
  button {
    opacity: 0;
    font-size: 9px;
  }
`;

const EventCalendar = ({ title, start, duration, right, width, id }) => {
  const { transform, height } = calcPositionEvent(start, duration);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      <Event
        transform={transform}
        height={height}
        width={width}
        transformX={right ? 93 : 0}
        taskId={id}
      >
        {title}
        <button onClick={() => handleDelete(id)}>Del</button>
      </Event>
    </>
  );
};

export default EventCalendar;
