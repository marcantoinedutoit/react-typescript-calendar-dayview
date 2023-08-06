import React from 'react';

import { render } from '@testing-library/react';
import { eventsCalendar } from 'datas/calendarEvents';

import Calendar from 'features/CalendarDay';
import { ICalendarProps } from 'features/CalendarDay/types';

describe('Calendar Component', () => {
  const mockEvents = eventsCalendar;

  it('renders without crashing', () => {
    render(<Calendar events={mockEvents} hoursDisplayed={8} scheduleStartTime={8} />);
  });

  it('displays events correctly', () => {
    const { getByText } = render(<Calendar events={mockEvents} hoursDisplayed={8} scheduleStartTime={8} />);

    mockEvents.forEach(event => {
      if (event.duration > 20) {
        const eventElement = getByText(event.id);
        expect(eventElement).toBeInTheDocument();
      }
    });
  });

  const mockCalendarProps: ICalendarProps = {
    events: mockEvents,
    hoursDisplayed: 8,
    scheduleStartTime: 8,
  };

  it('events eventIdsToCheck have width less than div width ID 17', () => {
    const { getByTestId } = render(<Calendar {...mockCalendarProps} />);
    const eventIdsToCheck = [6, 7, 9];
    const sampleEventId100Percent = 17; // ID 1 to simulate error

    const div17Element = getByTestId(`event-${sampleEventId100Percent}`);
    const div17Style = window.getComputedStyle(div17Element);
    const div17Width = parseFloat(div17Style.width);

    eventIdsToCheck.forEach(eventId => {
      const eventElement = getByTestId(`event-${eventId}`);
      const eventStyle = window.getComputedStyle(eventElement);
      const eventWidth = parseFloat(eventStyle.width);

      expect(eventWidth).toBeLessThan(div17Width);
    });
  });
});
