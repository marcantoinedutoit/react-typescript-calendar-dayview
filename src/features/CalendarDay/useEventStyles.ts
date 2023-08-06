import { useCallback, useEffect, useMemo, useState } from 'react';

import { IEvent, IEventStyle } from './types';
import { calculateConflictingGroups, calculateEventStyle } from './utils';

/**
 * Custom hook for calculating and managing event styles based on calendar data.
 * @param {IEvent[]} events - List of events.
 * @param {number} hoursDisplayed - Number of hours displayed in the calendar.
 * @param {number} scheduleStartTime - Starting hour of the calendar.
 * @returns {IEventStyle[]} - Array of calculated event styles.
 */
export const useEventStyles = (events: IEvent[], hoursDisplayed: number, scheduleStartTime: number): IEventStyle[] => {
  // State to store calculated event styles
  const [eventStyles, setEventStyles] = useState<IEventStyle[]>([]);

  // Memoize conflicting event groups for optimization
  const memoizedConflictingGroups = useMemo(() => calculateConflictingGroups(events), [events]);

  // Memoize the event style calculation function for optimization
  const memoizedCalculateEventStyle = useMemo(() => calculateEventStyle, []);

  // Callback to calculate event styles
  const calculateStyles = useCallback(() => {
    // Retrieve conflicting event groups
    const conflictingGroups = memoizedConflictingGroups;

    // Calculate event styles for each event
    const calculatedEventStyles = events.map(event => {
      const group = conflictingGroups.find(g => g.includes(event));
      const groupWidth = group ? 100 / group.length : 100;
      const groupIndex = group ? group.indexOf(event) : 0;

      // Calculate event style using memoized function
      return memoizedCalculateEventStyle(event, groupWidth, groupIndex, hoursDisplayed, scheduleStartTime);
    });

    // Update eventStyles state with calculated styles
    setEventStyles(calculatedEventStyles);
  }, [events, hoursDisplayed, memoizedCalculateEventStyle, memoizedConflictingGroups, scheduleStartTime]);

  // Effect to recalculate event styles on window resize
  useEffect(() => {
    // Initial calculation
    calculateStyles();

    // Resize event listener
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateStyles, 300);
    };

    let resizeTimeout: NodeJS.Timeout;

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateStyles]);

  // Return calculated event styles
  return eventStyles;
};
