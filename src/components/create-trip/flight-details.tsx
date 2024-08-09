'use client';

import type { Control, UseFormTrigger } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import type { CreateTripType } from '@/lib/types/create-trip.interface';

import { Input } from '../ui/input';

interface Props {
  stepfn: (num: number) => void;
  control: Control<CreateTripType>;
  trigger: UseFormTrigger<CreateTripType>;
}

const FlightDetails: React.FC<Props> = ({ stepfn, control, trigger }) => {
  const onSubmit = async () => {
    const res = await trigger('flight');
    if (res) {
      stepfn(3);
    }
  };

  return (
    <>
      <div className="text-center text-2xl sm:text-4xl">Select Flight(s)</div>

      <FormField
        control={control}
        name="flight"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <ToggleGroup
                type="single"
                className="flex flex-col p-2"
                value={field.value}
                onValueChange={field.onChange}
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
        control={control}
        name="flight"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="cursor-pointer border-none font-semibold text-black underline"
                {...field}
                value="I have already booked a flight"
                onClick={() => {
                  field.onChange('booked flight offline ');
                  stepfn(3);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between">
        <Button type="button" onClick={() => stepfn(1)}>
          Prev
        </Button>
        <Button type="button" onClick={onSubmit}>
          Next
        </Button>
      </div>
    </>
  );
};

export default FlightDetails;
