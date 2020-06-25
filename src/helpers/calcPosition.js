// const calcPositionEvent = (startDate, endDate) => {
//   const startHours = startDate.getHours();
//   const startMinute = startDate.getMinutes();
//   const endDateHours = endDate.getHours();
//   const endDateMinute = endDate.getMinutes();
//   const startTimeDayTableOne = 480;
//   const startPosition = startHours * 60 + startMinute - startTimeDayTableOne;
//   const endPosition = endDateHours * 60 + endDateMinute - startTimeDayTableOne;

//   const startTimeInMinets = startHours * 60 + startMinute;
//   const endTimeInMinutes = endDateHours * 60 + endDateMinute;

//   const transform = startPosition * 1.52;
//   const height = (endPosition - startPosition) * 1.52;
//   return {
//     transform,
//     height,
//     startTimeInMinets,
//     endTimeInMinutes,
//   };
// };
// export default calcPositionEvent;


const calcPositionEvent = (start, duration) => {
  const transform = start * 1.52;
  const height = (duration) * 1.52;
  return {
    transform,
    height,
  };
};
export default calcPositionEvent;