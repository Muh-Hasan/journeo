'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import DestinationDetails from './destination-details';
import FlightDetails from './flight-details';
import HotelDetails from './hotel-details';
import type FormFields from './interface';
import UserDetails from './user-details';

function MountFormPage({
  step,
  data,
  stepfn,
  datafn,
}: {
  step: number;
  data: FormFields;
  stepfn: (num: number) => void;
  datafn: (data: FormFields) => void;
}): ReactNode {
  switch (step) {
    case 1:
      return (
        <DestinationDetails stepfn={stepfn} datafn={datafn} formData={data} />
      );
    case 2:
      return <UserDetails stepfn={stepfn} datafn={datafn} />;
    case 3:
      return <FlightDetails stepfn={stepfn} datafn={datafn} />;
    case 4:
      return <HotelDetails stepfn={stepfn} datafn={datafn} />;
    default:
      // handle err here
      stepfn(1);
  }
}

export default function TripForm() {
  const [formStep, setFormStep] = useState<number>(1);
  const [userDetails, setUserDetails] = useState<FormFields>({
    destination: { city: '', country: '' },
    date: { to: new Date(), from: new Date() },
    mode: '',
    activites: [],
    flight: '',
    accomodation: '',
  });

  return (
    <MountFormPage
      step={formStep}
      data={userDetails}
      stepfn={setFormStep}
      datafn={setUserDetails}
    />
  );
}
