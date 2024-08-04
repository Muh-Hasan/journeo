'use client';

import { addDays } from 'date-fns';
import type { ReactNode } from 'react';
import { useState } from 'react';

import type { FormFields } from '@/lib/types/create-trip.interface';

import DestinationDetails from './destination-details';
import FlightDetails from './flight-details';
import HotelDetails from './hotel-details';

function MountFormPage({
  step,
  data,
  stepfn,
  datafn,
}: {
  step: number;
  data: FormFields;
  stepfn: (num: number) => void;
  datafn: (fn: (data: FormFields) => FormFields) => void;
}): ReactNode {
  switch (step) {
    case 1:
      return (
        <DestinationDetails stepfn={stepfn} datafn={datafn} formData={data} />
      );
    case 2:
      return <FlightDetails stepfn={stepfn} datafn={datafn} formData={data} />;
    case 3:
      return <HotelDetails stepfn={stepfn} datafn={datafn} formData={data} />;
    default:
      // handle err here
      stepfn(1);
  }
}

export default function TripForm() {
  const [formStep, setFormStep] = useState<number>(1);
  const [userDetails, setUserDetails] = useState<FormFields>({
    destination: '',
    duration: { to: addDays(new Date(), 1), from: new Date() },
    preferenceTime: '',
    visibility: true,
    flight: '',
    hotelName: '',
    hotelBooking: '',
    hotelLocation: '',
    hotelPhone: '',
    checkIn: {
      from: new Date(),
      to: addDays(new Date(), 1),
    },
  });

  return (
    <div className="w-[300px] xs:w-[400px] sm:w-[600px]">
      <MountFormPage
        step={formStep}
        data={userDetails}
        stepfn={setFormStep}
        datafn={setUserDetails}
      />
    </div>
  );
}
