import React, { ReactElement } from 'react';

import { ICalendarProps } from './types';
import { useEventStyles } from './useEventStyles';

/**
 * CalendarDay Component
 * Displays a day view of a calendar with listed events.
 *
 * @param props - The component props containing event data and display settings.
 * @returns The rendered CalendarDay component.
 */
const CalendarDay: React.FunctionComponent<ICalendarProps> = ({ events, hoursDisplayed, scheduleStartTime }) => {
  // Calculate event styles using the custom hook
  const eventStyles = useEventStyles(events, hoursDisplayed, scheduleStartTime);

  // Generate hour elements to display in the calendar
  type HourElement = ReactElement;
  const hourElements: HourElement[] = Array.from({ length: hoursDisplayed + 1 }, (_, i) => (
    <div key={i} style={{ height: '50px' }} className={'text-primary-custom'}>
      {`${String(i + scheduleStartTime).padStart(2, '0')}h`}
      <span className='md:inline-block hidden'>00</span>
    </div>
  ));

  // Generate events based on event data and calculated styles
  type eventElement = ReactElement;
  const eventElements: eventElement[] = events.map((event, index) => (
    <div
      key={event.id}
      className='absolute border bg-[#4676CE] bg-opacity-5 hover:bg-opacity-100 hover:text-white border-[#3b82f6] text-primary-custom font-bold text-center px-2 cursor-help transition-colors duration-300 rounded-md'
      style={{
        top: `${eventStyles[index]?.top || 0}px`,
        height: `${eventStyles[index]?.height || 0}px`,
        width: `${eventStyles[index]?.width || 100}%`,
        left: `${eventStyles[index]?.left || 0}%`,
      }}
      title={`ID: ${event.id}, Start: ${event.start}, Duration: ${event.duration}`}
      data-testid={`event-${event.id}`}
    >
      {/* Display event ID if duration is greater than 20 for UI/UX */}
      {event.duration > 20 && event.id}
    </div>
  ));

  // Render the CalendarDay component
  return (
    <div className='flex bg-gray-100 p-2 rounded-md'>
      {/* Hour display column */}
      <div className='w-2/12 md:w-2/12 bg-gray-200 pr-2 mr-2 pt-0 rounded-tl-md rounded-bl-md overflow-hidden text-xs md:text-base'>
        {hourElements}
      </div>
      {/* Event display column */}
      <div className='flex-grow relative p-2'>{eventElements}</div>
    </div>
  );
};

export default CalendarDay;
