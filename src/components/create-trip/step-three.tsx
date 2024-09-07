import React from 'react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Button } from '../ui/button';
import { useFormContext } from './form-provider';

const StepThree = () => {
  const {
    form: { control },
  } = useFormContext();

  return (
    <>
      <FormField
        control={control}
        name="hotel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hotel</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter hotel name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="hotelBooking"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hotel Booking Number</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter booking number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full" size="lg">
        Submit
      </Button>
    </>
  );
};

export default StepThree;
