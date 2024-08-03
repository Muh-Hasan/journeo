'use client';

import { IconArrowRight } from '@tabler/icons-react';
import React, { Fragment } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

// interface Props {
//   startTime: number;
//   endTime: number;
// }

const TimeSelectDropdown = () => {
  //   const [time, setTime] = useState({ startTime: '', endTime: '' });

  return (
    <>
      <Popover>
        <PopoverTrigger className="mt-1.5 hidden sm:mt-1 sm:block">
          <div className="flex items-center gap-1 rounded-lg border border-solid border-gray-300 bg-white p-1 px-2 text-xs text-gray-700">
            8:00 AM
            <IconArrowRight className="size-3" />
            10:00 AM
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-fit p-3" align="start">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="w-full text-sm text-gray-600 md:max-w-24">
                Start time
              </span>
              <div className="flex items-center gap-2">
                <Input className="h-auto px-0.5 py-1 md:max-w-24" />
                <IconArrowRight className="size-3 text-gray-700" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600">End time</span>
              <Input className="h-auto px-0.5 py-1 md:max-w-24" />
            </div>
          </div>

          <ScrollArea className="h-48 rounded-lg border text-center md:h-32">
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
            <Button variant="ghost" className="w-full">
              6:00 AM
            </Button>
          </ScrollArea>

          <Button className="w-full" variant="outline" size="sm">
            Save
          </Button>
        </PopoverContent>
      </Popover>

      <Drawer>
        <DrawerTrigger className="block sm:hidden">
          <div className="flex items-center gap-1 rounded-lg border border-solid border-gray-300 bg-white p-1 px-2 text-xs text-gray-700">
            8:00 AM
            <IconArrowRight className="size-3" />
            10:00 AM
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="w-full text-sm text-gray-600 md:max-w-24">
                Start time
              </span>
              <div className="flex items-center gap-2">
                <Input className="h-auto px-0.5 py-1 md:max-w-24" />
                <IconArrowRight className="size-3 text-gray-700" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600">End time</span>
              <Input className="h-auto px-0.5 py-1 md:max-w-24" />
            </div>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TimeSelectDropdown;
