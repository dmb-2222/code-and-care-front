import React from "react";

const AUTH_PAGE = React.lazy(() =>
  import("../Pages/AuthPag" /* webpackChunkName: "AUTH_PAGE" */)
);

const CALENDAR_PAGE = React.lazy(() =>
  import("../Pages/CalendarPag" /* webpackChunkName: "CALENDAR_PAGE" */)
);

export default {
  AUTH_PAGE: {
    path: "/auth",
    component: AUTH_PAGE,
  },
  CALENDAR_PAGE: {
    path: "/calendar",
    component: CALENDAR_PAGE,
  },
};
