import React, { useState, useRef } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTaskSelector } from "../../redux/task/taskSelectors";
import { addTask } from "../../redux/task/taskOperations";

import { calcAm, calcPm } from "../../helpers/calcPosition";

const INITIAL_STATE = {
  startHour: "",
  startMinutes: "",
  endHour: "",
  endMinutes: "",
  title: "",
};
const Form = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [isAm, setIsAm] = useState(true);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((state) => ({ ...state, [name]: value }));
  };
  const dispatch = useDispatch();
  const handleAddTask = (
    startHour,
    startMinutes,
    endHour,
    endMinutes,
    title
  ) => {
    const { start, duration } = isAm
      ? calcAm(startHour, startMinutes, endHour, endMinutes)
      : calcPm(startHour, startMinutes, endHour, endMinutes);

    const body = {
      start,
      duration,
      title,
    };
    dispatch(addTask(body));
  };
  // in other situations use this pattern
  //   const [hour, setHour] = useState("");
  //   const [minutes, setMinutes] = useState("");
  //   const [event, setEvent] = useState("");
  //   const set = { setHour, setMinutes, setEvent };
  //   const handleChange = ({ target }) => {
  //     set[target.name](target.value);
  //   };
  const handleRdio = () => {
    setIsAm(!isAm);
  };
  const clear = () => {
    setState(INITIAL_STATE);
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    handleAddTask(startHour, startMinutes, endHour, endMinutes, title);
    clear();
  };
  const ref = useRef(null);
  const fileTask = useSelector(getTaskSelector);
  const resault = fileTask.map((el) => {
    let arr = [];
    arr = [...arr, { start: el.start, duration: el.duration, title: el.title }];
    return arr;
  });

  const handleDownloud = () => {
    const csvData =
      "data:application/txt;charset=utf-8," +
      encodeURIComponent(JSON.stringify(resault));
    ref.current.href = csvData;
    ref.current.target = "_blank";
    ref.current.download = "allTasks.json";
  };
  const { startHour, startMinutes, endHour, endMinutes, title } = state;
  return (
    <>
      <div className={style.export}>
        <a ref={ref} href="/#" onClick={handleDownloud}>
          Downloud tasks
        </a>
      </div>
      <div className={style.containerForm}>
        {/* <form>
          <div>
            <label>
              <input type="radio" onChange={handleRdio} checked={isAm} />
              AM
            </label>
          </div>
          <div>
            <label>
              <input type="radio" onChange={handleRdio} checked={!isAm} />
              PM
            </label>
          </div>
        </form> */}

        <form onSubmit={handleSubmite} className={style.form}>
          <div>
            <input
              type="number"
              placeholder="startHour"
              name="startHour"
              onChange={handleChange}
              value={startHour}
              // min={isAm ? "8" : "1"}
              // max={isAm ? "12" : "5"}
              className={style.time}
              required
            />
            <input
              type="number"
              placeholder="startMinutes"
              name="startMinutes"
              onChange={handleChange}
              value={startMinutes}
              min="0"
              max="59"
              className={style.time}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="endHour"
              name="endHour"
              onChange={handleChange}
              value={endHour}
              // min={isAm ? "8" : "1"}
              // max={isAm ? "12" : "5"}
              className={style.time}
              required
            />
            <input
              type="number"
              placeholder="endMinutes"
              name="endMinutes"
              onChange={handleChange}
              value={endMinutes}
              min="0"
              max="59"
              className={style.time}
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="enter yuor event"
              name="title"
              onChange={handleChange}
              value={title}
              required
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
