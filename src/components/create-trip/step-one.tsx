import React from 'react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '../ui/input';
import { useFormContext } from './form-provider';

const StepOne = () => {
  const {
    form: { control },
  } = useFormContext();

  return (
    <section className="space-y-4">
      <div className="">Plan your next trip.</div>
      <div>
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select a city</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
};

export default StepOne;
