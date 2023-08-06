import { IEvent, IEventStyle } from './types';

export const getStartNumber = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const getEndNumber = (event: IEvent): number => {
  return getStartNumber(event.start) + event.duration;
};

export const calculateEventStyle = (
  event: IEvent,
  groupWidth: number,
  groupIndex: number,
  hoursDisplayed: number,
  scheduleStartTime: number,
): IEventStyle => {
  const HOUR_IN_MINUTES = 60;
  const PIXELS_PER_HOUR = 100;

  const width = groupWidth;
  const left = groupIndex * groupWidth;

  // Calculate top and height based on start time and duration
  const hoursDisplayedInMinutes = hoursDisplayed * HOUR_IN_MINUTES;
  const top =
    ((getStartNumber(event.start) - scheduleStartTime * HOUR_IN_MINUTES) * PIXELS_PER_HOUR) / hoursDisplayedInMinutes;
  const height = (event.duration * 100) / hoursDisplayedInMinutes;

  // Adjust top and height to match the height of the events column
  const hourHeight = PIXELS_PER_HOUR / hoursDisplayed;
  const adjustedTop = top * hourHeight;
  const adjustedHeight = height * hourHeight;

  return {
    top: adjustedTop,
    height: adjustedHeight,
    width,
    left,
  };
};

export const calculateConflictingGroups = (events: IEvent[]) => {
  const conflictingGroups: IEvent[][] = [];

  events.forEach(event => {
    // Look for an existing group where the event can be added
    const conflictingGroup = conflictingGroups.find(group =>
      group.some(
        conflictingEvent =>
          !(
            getEndNumber(conflictingEvent) <= getStartNumber(event.start) ||
            getStartNumber(conflictingEvent.start) >= getEndNumber(event)
          ),
      ),
    );

    // If a conflicting group exists, add the event to it; otherwise, create a new group
    if (conflictingGroup) {
      conflictingGroup.push(event);
    } else {
      conflictingGroups.push([event]);
    }
  });

  return conflictingGroups;
};
