import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../redux/task/taskOperations";
import { getTaskSelector } from "../../redux/task/taskSelectors";
import {isAuth} from '../../redux/Auth/authSelectors'
import { timeAm, timePm } from "../../helpers/time";
import TimeScale from "../TimeScale";
import style from "./Calendar.module.css";
import EventCalendar from "../EventCalendar";
// import { appointments } from "./appointments";
import maper from "../../helpers/maper";

const Calendar = () => {
  const dispatch = useDispatch();
  const memoizedCallback = useCallback(() => {
    dispatch(getTask());
  }, [dispatch]);

  const isLogin = useSelector(isAuth);

  useEffect(() => {
    if (isLogin) {
      memoizedCallback();
    }
  }, [isLogin, memoizedCallback]);
  const appointments = useSelector(getTaskSelector);
  const eventWithPositions = appointments.length > 0 && maper(appointments);
  return (
    <div className={style.calendar}>
      <div className={style.containerEvent}>
        <div>
          {timeAm.map((time) => (
            <div key={time} className={style.timeBox}>
              <div className={style.scaleTieme}>
                <TimeScale time={time} />
              </div>
            </div>
          ))}
        </div>
        {eventWithPositions && (
          <div className={style.boxEvent}>
            {eventWithPositions.map(
              (event) =>
                event.start < 300 && (
                  <EventCalendar
                    key={event._id}
                    start={event.start}
                    duration={event.duration}
                    title={event.title}
                    right={event.right}
                    width={event.width}
                    id={event._id}
                  />
                )
            )}
          </div>
        )}
      </div>
      <div className={style.containerEvent}>
        <div>
          {timePm.map((time) => (
            <div key={time} className={style.timeBox}>
              <div className={style.scaleTieme}>
                <TimeScale time={time} />
              </div>
            </div>
          ))}
        </div>
        {eventWithPositions && (
          <div className={style.boxEvent}>
            {eventWithPositions.map(
              (event) =>
                event.start >= 300 && (
                  <EventCalendar
                    key={event._id}
                    start={event.start-300}
                    duration={event.duration}
                    title={event.title}
                    right={event.right}
                    width={event.width}
                    id={event._id}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Calendar;
