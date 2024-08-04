'use client';

/* eslint-disable */

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { format, isBefore } from 'date-fns';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { destDetailsSchema } from '@/lib/schema/create-trip';
import type { FormFields } from '@/lib/types/create-trip.interface';
import { cn } from '@/lib/utils';

interface Props {
  stepfn: (num: number) => void;
  datafn: (fn: (data: FormFields) => FormFields) => void;
  formData: FormFields;
}

const DestinationDetails: React.FC<Props> = ({ stepfn, datafn, formData }) => {
  const form = useForm<z.infer<typeof destDetailsSchema>>({
    defaultValues: {
      destination: formData.destination,
      duration: {
        from: formData.duration.from,
        to: formData.duration.to,
      },
      preferenceTime: formData.preferenceTime,
      visibility: formData.visibility,
    },
    resolver: zodResolver(destDetailsSchema),
  });
  const onSubmit = ({
    destination,
    duration,
    preferenceTime,
    visibility,
  }: z.infer<typeof destDetailsSchema>) => {
    datafn((data) => ({
      ...data,
      destination,
      preferenceTime,
      visibility,
      duration: { to: duration.to, from: duration.from },
    }));
    stepfn(2);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="text-center text-2xl sm:text-4xl">
            Select the Perfect Destination
          </div>

          <FormField
            control={form.control}
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

          <div className=" text-sm font-semibold">
            Choose a date plan from the calendar!
          </div>

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          'w-[300px] justify-start text-left font-normal',
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

          <FormField
            control={form.control}
            name="preferenceTime"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-sm font-semibold">
                  When will you be most active during the vacation
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="dayTime" />
                      </FormControl>
                      <FormLabel className="font-normal">Day Time</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="nightTime" />
                      </FormControl>
                      <FormLabel className="font-normal">Night Time</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="optional" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Optional (can be both)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex">
            <Button type="submit" className="mx-4 w-full">
              Next
            </Button>
          </div>

          <FormField
            control={form.control}
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
        </form>
      </Form>
    </div>
  );
};

export default DestinationDetails;
