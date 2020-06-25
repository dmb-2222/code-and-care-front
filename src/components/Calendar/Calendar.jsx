import React from "react";
import { timeAm, timePm } from "../../helpers/time";
import TimeScale from "../TimeScale";
import style from "./Calendar.module.css";
import EventCalendar from "../EventCalendar";
import { appointments } from "./appointments";
import maper from "../../helpers/maper";

const Calendar = () => {
  const eventWithPositions = maper(appointments);
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
        <div className={style.boxEvent}>
          {eventWithPositions.map((event) => (
            <EventCalendar
              key={event.id}
              start={event.start}
              duration={event.duration}
              title={event.title}
              right={event.right}
              width={event.width}
            />
          ))}
        </div>
      </div>

      <div>
        {timePm.map((time) => (
          <div key={time} className={style.timeBox}>
            <div className={style.scaleTieme}>
              <TimeScale time={time} />
            </div>
            {/* <div className={style.boxEvent}>
              {eventWithPositions.map((event) => (
                <EventCalendar
                  key={event.id}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  title={event.title}
                  right={event.right}
                  width={event.width}
                />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
