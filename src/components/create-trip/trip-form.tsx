'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays } from 'date-fns';
import type { ReactNode } from 'react';
import { useState } from 'react';
import type { Control, UseFormTrigger } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { CreateTripSchema } from '@/lib/schema/create-trip';
import type { CreateTripType } from '@/lib/types/create-trip.interface';

import { Form } from '../ui/form';
import DestinationDetails from './destination-details';
import FlightDetails from './flight-details';
import HotelDetails from './hotel-details';

function MountFormPage({
  step,
  stepfn,
  control,
  trigger,
}: {
  step: number;
  stepfn: (num: number) => void;
  control: Control<CreateTripType>;
  trigger: UseFormTrigger<CreateTripType>;
}): ReactNode {
  switch (step) {
    case 1:
      return (
        <DestinationDetails
          stepfn={stepfn}
          control={control}
          trigger={trigger}
        />
      );
    case 2:
      return (
        <FlightDetails stepfn={stepfn} control={control} trigger={trigger} />
      );
    case 3:
      return <HotelDetails stepfn={stepfn} control={control} />;
    default:
      // handle err here
      stepfn(1);
  }
}

export default function TripForm() {
  const [formStep, setFormStep] = useState<number>(1);

  const form = useForm<CreateTripType>({
    defaultValues: {
      duration: { to: addDays(new Date(), 1), from: new Date() },
      visibility: true,
      checkIn: { end: addDays(new Date(), 1), start: new Date() },
    },
    resolver: zodResolver(CreateTripSchema),
  });

  const { control, handleSubmit, trigger } = form;

  const onSubmit = (values: CreateTripType) => values;
  return (
    <div className="w-[300px] xs:w-[400px] sm:w-[600px]">
      <Form {...form}>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 sm:space-y-5">
            <MountFormPage
              step={formStep}
              stepfn={setFormStep}
              control={control}
              trigger={trigger}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
