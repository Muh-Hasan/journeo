'use client';

/* eslint-disable */

import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

interface Props {
  stepfn: any;
  datafn: any;
}

const UserDetails: React.FC<Props> = ({ stepfn }) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const activities = [
    'Art Galleries',
    'Culture',
    'Must-see Attractions',
    'Great Food',
    'Historical Landmarks',
    'Water Sport Adventures',
    'Island Life',
    'Nightlife and Bars',
    'Outdoors',
  ];

  return (
    <form className="h-full w-auto space-y-6">
      <div className="text-center text-4xl">When do you plan this vacation</div>

      <div className=" text-sm font-semibold">
        Choose a date plan from the calendar!
      </div>

      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 size-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="text-sm font-semibold">What is the mode of the trip</div>
      <ToggleGroup type="single" className="border-l">
        <ToggleGroupItem
          value="solo"
          aria-label="Solo Trip"
          className="hover:border-2"
        >
          Solo Trip
        </ToggleGroupItem>
        <ToggleGroupItem
          value="couple"
          aria-label="Couple"
          className="hover:border-2"
        >
          Couple
        </ToggleGroupItem>
        <ToggleGroupItem
          value="family"
          aria-label="Family"
          className="hover:border-2"
        >
          Family
        </ToggleGroupItem>
        <ToggleGroupItem
          value="friends"
          aria-label="Friends"
          className="hover:border-2"
        >
          Friends
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="text-sm font-semibold">
        What activities would you like to include
      </div>
      <ToggleGroup
        type="multiple"
        className="flex w-[600px] flex-wrap border-l"
      >
        {activities &&
          activities.map((elem) => (
            <ToggleGroupItem
              key={elem}
              value={elem}
              aria-label={elem}
              className="rounded-lg data-[state=on]:border data-[state=on]:border-black"
            >
              {elem}
            </ToggleGroupItem>
          ))}
      </ToggleGroup>

      <div className="flex justify-between">
        <Button onClick={() => stepfn(1)}>Prev</Button>
        <Button onClick={() => stepfn(3)}>Next</Button>
      </div>
    </form>
  );
};

export default UserDetails;
