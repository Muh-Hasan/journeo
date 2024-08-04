'use client';

import { isBefore } from 'date-fns';
import type { FC } from 'react';
import React, { Fragment, useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import TimeSelectionContent from './time-selection-content';
import TimeSelectionTrigger from './time-selection-trigger';

interface Props {
  startTime: number;
  endTime: number;
}

const TimeSelectionDropDown: FC<Props> = ({ startTime, endTime }) => {
  const [time, setTime] = useState({ start: startTime, end: endTime });

  const isTimeValid = isBefore(endTime, startTime);

  return (
    <>
      <Popover>
        <PopoverTrigger className="mt-1 hidden sm:block">
          <TimeSelectionTrigger startTime={time.start} endTime={time.end} />
        </PopoverTrigger>

        <PopoverContent className="max-w-xs space-y-2" align="start">
          <TimeSelectionContent
            time={time}
            setTime={setTime}
            baseDate={startTime}
          />
          <Button className="w-full" size="sm" disabled={isTimeValid}>
            Save
          </Button>
        </PopoverContent>
      </Popover>
      <Drawer>
        <DrawerTrigger className="mt-1.5 block sm:hidden">
          <TimeSelectionTrigger startTime={time.start} endTime={time.end} />
        </DrawerTrigger>
        <DrawerContent className="container space-y-3">
          <TimeSelectionContent
            time={time}
            setTime={setTime}
            baseDate={startTime}
          />
          <Button className="w-full" size="sm" disabled={isTimeValid}>
            Save
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TimeSelectionDropDown;
