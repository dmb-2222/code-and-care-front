import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import styles from "./CalendarEvent.module.css";
// const style = (theme) => ({
//   today: {
//     backgroundColor: "red",
//   },
// });
// const TimeTableCellBase = ({ classes, ...restProps }) => {
//   const { startDate } = restProps;
//   const date = new Date(startDate);
//   if (date.getDate() === new Date().getDate()) {
//     return (
//       <DayView.TimeTableCell {...restProps} className={classes.todayCell} />
//     );
//   }
//   if (date.getDay() === 0 || date.getDay() === 6) {
//     return (
//       <DayView.TimeTableCell {...restProps} className={classes.weekendCell} />
//     );
//   }
//   return <DayView.TimeTableCell {...restProps} />;
// };
// const TimeTableCell = withStyles(style, { name: "TimeTableCell" })(
//   TimeTableCellBase
// );

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      fontFamily: "Open Sans",
      backgroundColor: "#e2ecf5",
      borderLeft: "2px solid #7ba7d3",
      borderRadius: "0px",
      fontSize: "12px",
      fontWeight: "200",
    }}
  >
    {children}
  </Appointments.Appointment>
);

const ContainerProps = ({ children, style}) => (
  <Appointments.AppointmentContentProps
    style={{
      ...style,
      color: "#1aae8a",
    }}
  >
    {children}
  </Appointments.AppointmentContentProps>
);

const CalendarEvent = ({
  startDayHour,
  endDayHour,
  currentDate,
  commitChanges,
  data,
}) => {
  // const classes = useStyles();
  return (
    <div className={styles.calendarEvent}>
      <Scheduler data={data}>
        <ViewState currentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <DayView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          // timeTableCellComponent={TimeTableCell}
        />
        <ConfirmationDialog />
        <Appointments
          appointmentComponent={Appointment}
          // appointmentContentComponent={ContainerProps}
        />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
};
export default CalendarEvent;
