import * as React from "react";
import { timeAm, timePm } from "../../helpers/time";
import TimeScale from "../TimeScale";
import style from "./Calendar.module.css";

const Calendar = () => (
  <div className={style.calendar}>
    <table>
      {timeAm.map((time) => (
        <tr key={time} className={style.timeBox}>
          <td>
            <TimeScale time={time} />
          </td>
          <td>Здесь будет событие</td>
        </tr>
      ))}
    </table>
    <table>
      {timePm.map((time) => (
        <tr key={time} className={style.timeBox}>
          <td>
            <TimeScale time={time} />
          </td>
          <td>Здесь будет событие</td>
        </tr>
      ))}
    </table>
  </div>
);
export default Calendar;
