import * as React from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";

import {
  Scheduler,
  MonthView,
  WeekView,
  DayView,
  Appointments,
  DateNavigator,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./data";
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={700}>
          <ViewState defaultCurrentDate="2018-07-27" />
          <EditingState onCommitChanges={this.commitChanges} />
          <MonthView startDayHour={9} endDayHour={19} />
          <WeekView startDayHour={9} endDayHour={19} />
          <DayView startDayHour={9} endDayHour={19} />

          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />

          <AppointmentTooltip showOpenButton showCloseButton />
          <AppointmentTooltip.Header />
          <AppointmentTooltip.CommandButtonProps>hello</AppointmentTooltip.CommandButtonProps>
          <AppointmentForm SelectProps />
        </Scheduler>
      </Paper>
    );
  }
}
