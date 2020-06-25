import React, { useState } from "react";
import style from "./Form.module.css";

const INITIAL_STATE = {
  startHour: "",
  startMinutes: "",
  endHour: "",
  endMinutes: "",
  title: "",
};
const Form = () => {

  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((state) => ({ ...state, [name]: value }));
  };
  //   const [hour, setHour] = useState("");
  //   const [minutes, setMinutes] = useState("");
  //   const [event, setEvent] = useState("");

  //   const set = { setHour, setMinutes, setEvent };

  //   const handleChange = ({ target }) => {
  //     set[target.name](target.value);
  //   };
  const clear = () => {
    setState(INITIAL_STATE);
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(startHour, startMinutes, endHour, endMinutes, title);
    clear();
  };
  const { startHour, startMinutes, endHour, endMinutes, title } = state;
  return (
    <form onSubmit={handleSubmite} className={style.form}>
      <div>
        <input
          type="number"
          placeholder="startHour"
          name="startHour"
          onChange={handleChange}
          value={startHour}
          min="8"
          max="12"
          className={style.time}
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
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="endHour"
          name="endHour"
          onChange={handleChange}
          value={endHour}
          min="8"
          max="12"
          className={style.time}
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
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="enter yuor event"
          name="event"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
