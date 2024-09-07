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

const StepTwo = () => {
  const {
    form: { control, trigger },
    setStep,
  } = useFormContext();

  const handleSubmit = async () => {
    const isValid = await trigger(['flightFrom', 'flightNo', 'ticketNo']);
    if (isValid) setStep(3);
  };

  return (
    <>
      <FormField
        control={control}
        name="flightFrom"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Departure City</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <FormField
          control={control}
          name="flightNo"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Flight Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="ticketNo"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ticket Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="button" className="w-full" size="lg" onClick={handleSubmit}>
        Continue
      </Button>
    </>
  );
};

export default StepTwo;
