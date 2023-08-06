import React, { ReactElement } from 'react';

import { eventsCalendar } from 'datas/calendarEvents';

import CalendarDay from 'features/CalendarDay';

export const Home: React.FunctionComponent = (): ReactElement => {
  return (
    <div className='m-auto max-w-5xl mt-20 mb-20'>
      <div className='text-center z-10'>
        <h1 className='text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate__animated animate__backInLeft mt-10 mb-0'>
          {"Calendar's"}
        </h1>
        <h1 className='text-4xl tracking-tight font-extrabold text-primary-custom dark:text-white animate__animated animate__backInLeft mb-10'>
          <span className='sm:text-2xl text-secondary-custom mb-1 block'>day</span>
          <span className='text-gradient-title mb-2'>View</span>
        </h1>
      </div>

      <div className='text-center z-10'>
        <CalendarDay events={eventsCalendar} hoursDisplayed={14} scheduleStartTime={7} />
      </div>
    </div>
  );
};
