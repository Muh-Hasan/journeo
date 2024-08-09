'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { format } from 'date-fns';
import type { Control } from 'react-hook-form';

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
import { PopoverContent } from '@/components/ui/popover';
import type { CreateTripType } from '@/lib/types/create-trip.interface';
import { cn } from '@/lib/utils';

interface Props {
  stepfn: (num: number) => void;
  control: Control<CreateTripType>;
}

const HotelDetails: React.FC<Props> = ({ stepfn, control }) => {
  return (
    <>
      <div className="text-center text-2xl sm:text-4xl">
        Enter Hotel / Apartment reservation
      </div>

      <FormField
        control={control}
        name="hotelBooking"
        render={({ field }) => (
          <FormItem className="pt-4">
            <FormLabel>Booking Confirmation</FormLabel>
            <FormControl>
              <Input placeholder="Booking Confirmation #" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex gap-4">
        <div className="w-1/2">
          <FormField
            control={control}
            name="hotelName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hotel Name *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-1/2">
          <FormField
            control={control}
            name="hotelPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Hotel Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={control}
        name="hotelLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Location *" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="block space-y-3 sm:flex">
        <div className="sm:w-1/2">
          <FormField
            control={control}
            name="checkIn.start"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormItem className="flex flex-col">
                    <FormLabel>Check In Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="sm:flex sm:w-1/2 sm:justify-end">
          <FormField
            control={control}
            name="checkIn.end"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Checkout Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto size-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={() => stepfn(2)}>Prev</Button>
        <Button type="submit">Submit</Button>
      </div>
    </>
  );
};

export default HotelDetails;
