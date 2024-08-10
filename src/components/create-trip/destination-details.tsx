'use client';

/* eslint-disable */
import { CalendarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { format, isBefore } from 'date-fns';
import type { Control, UseFormSetValue, UseFormTrigger } from 'react-hook-form';

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
import { Toggle } from '../ui/toggle';

interface Props {
  stepfn: (num: number) => void;
  setValue: UseFormSetValue<CreateTripType>
  control: Control<CreateTripType>;
  trigger: UseFormTrigger<CreateTripType>
}

const DestinationDetails: React.FC<Props> = ({ stepfn,setValue,control,trigger }) => {

  const onSubmit = async () => {
    const res = await trigger(['destination','duration','times'])
   if(res){
      stepfn(2)
    }
  }  
  return (
    <>
      <div className="text-center text-2xl sm:text-4xl">
        Create Vacation
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
      
      <div className='block sm:flex gap-3 pt-6 space-y-4 sm:space-y-0'>
        <div className='sm:w-1/2'>
      <FormField
        control={control}
        name="duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Choose a date plan!</FormLabel>
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
            <FormLabel>Select a time frame</FormLabel>
            <FormControl>
              <TimeSelectionDropDown startTime={1722744000} endTime={1722751200} setValue={setValue} size='full'/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      </div>

      <FormField
        control={control}
        name="visibility"
        render={({ field }) => (
          <FormItem>
            <div className='w-full flex items-center justify-between pt-4'>
            <FormLabel className='text-sm font-semibold block'>Share Vacation with Others?</FormLabel>
            <FormControl>
            <Toggle size="sm" aria-label="visibility toggle" className= {cn(!field.value && 'text-red-400')}
                    onPressedChange={(value) => field.onChange(value)}
                    pressed={field.value}>
              {field.value ? "Yes" : " No"}
            </Toggle>
            </FormControl>
            </div>
          </FormItem>
        )}
      />

      <div className='flex justify-end pt-6'>
        <Button type='button' className='w-full'  onClick={onSubmit}>
          Next
        </Button>
      </div>

     
    </>
  );
};

export default DestinationDetails;
