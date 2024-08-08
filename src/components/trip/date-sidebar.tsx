import { eachDayOfInterval, format, fromUnixTime } from 'date-fns';
import type { FC } from 'react';
import React from 'react';

import { Button } from '../ui/button';

interface Props {
  startDate: number;
  endDate: number;
}

const DateSidebar: FC<Props> = ({ endDate, startDate }) => {
  const formattedDates = eachDayOfInterval({
    start: fromUnixTime(startDate),
    end: fromUnixTime(endDate),
  }).map((date) => ({
    day: format(date, 'd'),
    month: format(date, 'MMM'),
  }));

  const monthNames = Array.from(
    new Set(formattedDates.map(({ month }) => month)),
  );

  return (
    <div className="flex items-center sm:block">
      {monthNames.map((month) => (
        <div
          key={month}
          className="flex items-center text-gray-700 sm:block sm:text-center"
        >
          <div className="px-2 font-semibold capitalize sm:px-0 sm:py-2">
            {month}
          </div>
          <div className="flex sm:block">
            {formattedDates
              .filter((date) => date.month === month)
              .map(({ day }) => (
                <Button key={day} variant="ghost" className="cursor-pointer">
                  {day}
                </Button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateSidebar;
