export interface IEvent {
  id: number;
  start: string;
  duration: number;
}

export interface ICalendarProps {
  events: IEvent[];
  hoursDisplayed: number;
  scheduleStartTime: number;
}

export interface IEventStyle {
  top: number;
  height: number;
  width: number;
  left: number;
}
