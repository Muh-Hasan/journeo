'use client';

/* eslint-disable */
import { CalendarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { format, isBefore } from 'date-fns';
import type { Control, UseFormTrigger } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CreateTripType } from '@/lib/types/create-trip.interface';
import TimeSelectionDropDown from '../trip/time-selection-dropdown';

interface Props {
  stepfn: (num: number) => void;
  control: Control<CreateTripType>;
  trigger: UseFormTrigger<CreateTripType>
}

const DestinationDetails: React.FC<Props> = ({ stepfn,control,trigger }) => {

  const onSubmit = async () => {
    const res = await trigger(['destination','duration','times'])
    if(res){
      stepfn(2)
    }
  }  
  return (
    <>
      <div className="text-center text-2xl sm:text-4xl">
        Select the Perfect Destination
      </div>

      <FormField
        control={control}
        name="destination"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-0 top-[30%] mx-3" />
                <Input
                  placeholder="Search any city"
                  className="px-9 "
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className='block sm:flex gap-3 pt-8 space-y-4 sm:space-y-0'>
        <div className='sm:w-1/2'>
      <FormField
        control={control}
        name="duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="pb-1 text-sm font-semibold block">Choose a date plan from the calendar!</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      'w-full justify-center text-left font-normal',
                      !field.value.to && 'text-muted-foreground',
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {field.value?.from ? (
                      field.value?.to ? (
                        <>
                          {format(field.value.from, 'LLL dd, y')} -{' '}
                          {format(field.value.to, 'LLL dd, y')}
                        </>
                      ) : (
                        format(field.value.from, 'LLL dd, y')
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
                    disabled={(date) => isBefore(date, new Date())}
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={(selectedDate) => {
                      field.onChange(selectedDate);
                    }}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <div className='sm:w-1/2'>
      <FormField
        control={control}
        name="times"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-semibold block'>Select the time of your adventure</FormLabel>
            <FormControl>
              <div className='pl-3'>
              <TimeSelectionDropDown startTime={1722744000} endTime={1722751200} inputProps={field} size='full'/>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      </div>

      <div className="block sm:flex justify-between items-center pt-4 space-y-3 sm:space-y-0">
      <FormField
        control={control}
        name="visibility"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="flex justify-center">
                
                <div className="flex items-center">
                  <div className="flex text-sm font-semibold">
                    Allow Others to view this vacation?
                  </div>
                  <div
                    className="ml-1 cursor-pointer text-sm font-bold text-blue-600 underline"
                    {...field}
                    onClick={() => field.onChange(!field.value)}
                  >
                    {field.value ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <Button type='button'  onClick={onSubmit}>
          Next
        </Button>
      </div>

     
    </>
  );
};

export default DestinationDetails;
