import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { appointments } from "./appointments_";
import CalenadarEvent from "../TimeScale";
import styled from "styled-components";

// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import style from "./Calendar.module.css";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       500: "#e2ecf5",
//       300: "#e2ecf5",
//       400: "#00bcd5",
//     },
//   },
// });
const StyledTextField = styled(CalenadarEvent)`
  .MuiTable-root * td>div>span {
    color: red !important;
  }
`;
class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: "2018-06-27",
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { currentDate, data } = this.state;

    return (
      // <MuiThemeProvider theme={theme}>
      <Paper>
        <div className={style.calendar}>
          <StyledTextField
            startDayHour={8}
            endDayHour={13}
            currentDate={currentDate}
            data={data}
          />
          <CalenadarEvent
            startDayHour={13}
            endDayHour={18}
            currentDate={currentDate}
            data={data}
          />
        </div>
      </Paper>
      // </MuiThemeProvider>
    );
  }
}

export default Calendar;
