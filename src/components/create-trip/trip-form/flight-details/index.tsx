'use client';

/* eslint-disable */

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { flightDetailsSchema } from '@/lib/schema/create-trip';
import type { FormFields } from '@/lib/types/create-trip.interface';

interface Props {
  stepfn: (num: number) => void;
  datafn: (fn: (data: FormFields) => FormFields) => void;
  formData: FormFields;
}

const FlightDetails: React.FC<Props> = ({ stepfn, datafn, formData }) => {
  const form = useForm<z.infer<typeof flightDetailsSchema>>({
    defaultValues: {
      flight: formData.flight,
    },
    resolver: zodResolver(flightDetailsSchema),
  });

  const onSubmit = ({ flight }: z.infer<typeof flightDetailsSchema>) => {
    datafn((data) => ({ ...data, flight }));
    stepfn(3);
  };
  return (
    <Form {...form}>
      <form
        className="h-full w-auto space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-center text-2xl sm:text-4xl">Select Flight(s)</div>

        <FormField
          control={form.control}
          name="flight"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ToggleGroup
                  type="single"
                  className="flex flex-col p-2"
                  value={field.value}
                  onValueChange={(value) => form.setValue('flight', value)}
                >
                  <ToggleGroupItem
                    value="Flight Option 1"
                    aria-label="Flight-1"
                    className="w-full rounded-lg border py-10 data-[state=on]:border data-[state=on]:border-black"
                  >
                    Flight Option 1
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="Flight Option 2"
                    aria-label="Flight-2"
                    className="w-full rounded-lg border py-10 data-[state=on]:border data-[state=on]:border-black"
                  >
                    Flight Option 2
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="my-1 flex h-auto w-full">
          <Separator className="my-4 w-[47%] border-t border-gray-300" />
          <p className="flex items-center justify-center px-2 text-lg">or</p>
          <Separator className="my-4 w-[47%] border-t border-gray-300" />
        </div>

        <FormField
          control={form.control}
          name="flight"
          render={() => (
            <FormItem>
              <FormControl>
                <div
                  className="cursor-pointer font-semibold underline"
                  onClick={() => {
                    form.setValue('flight', 'user has booked a flight');
                    form.handleSubmit((data) => {
                      console.log(data);
                      stepfn(3);
                    })();
                  }}
                >
                  I have already booked a Flight!
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button onClick={() => stepfn(1)}>Prev</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default FlightDetails;
