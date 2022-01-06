import * as React from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  AppointmentTooltip,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import classNames from "clsx";

import { appointments , } from "./appointments";
import Layout from "../../src/components/Layout";


const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: "center",
  },
  firstRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)",
  },
  secondRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)",
  },
  thirdRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)",
  },
  header: {
    height: "200px",
    backgroundSize: "cover",
  },
  commandButton: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
});

const getClassByLocation = (classes, location) => {
  if (location === "Room 1") return classes.firstRoom;
  if (location === "Room 2") return classes.secondRoom;
  return classes.thirdRoom;
};

const Header = withStyles(style, { name: "Header" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Header
      {...restProps}
      className={classNames(
        getClassByLocation(classes, appointmentData.location),
        classes.header
      )}
      appointmentData={appointmentData}
    ></AppointmentTooltip.Header>
  )
);

const Content = withStyles(style, { name: "Content" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems="center">
        <Link href={`/konsultasi/` + appointmentData.title}>
          <Button item variant="contained">
            Daftar
          </Button>
        </Link>
      </Grid>
    </AppointmentTooltip.Content>
  )
);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentViewName: "work-week",
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
  }

  render() {
    const { data, currentViewName } = this.state;
    console.log(data)
    return (
      <Layout>
        <Paper className="p-24">
          <Scheduler data={data} height={660} dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ">
             
            <ViewState
              defaultCurrentDate="2018-07-25"
              currentViewName={currentViewName}
              onCurrentViewNameChange={this.currentViewNameChange}
            />

            <WeekView startDayHour={10} endDayHour={19} />
            <WeekView
              name="work-week"
              displayName="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />
            <DayView />

            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <Appointments />
            <AppointmentTooltip
              headerComponent={Header}
              contentComponent={Content}
              showCloseButton
            />
          </Scheduler>
        </Paper>
      </Layout>
    );
  }
}
