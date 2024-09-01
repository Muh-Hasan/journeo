'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { addDays } from 'date-fns';
// import type { ReactNode } from 'react';
// import { useState } from 'react';
// import type { Control, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
// import { toast } from 'sonner';

import { useFormContext } from './form-provider';
import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

const renderFormStep = (formStep: number) => {
  switch (formStep) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    default:
      return null;
  }
};

const CreateTripForm = () => {
  const {
    form: { handleSubmit },
    step,
    onSubmit,
  } = useFormContext();

  return <form onSubmit={handleSubmit(onSubmit)}>{renderFormStep(step)}</form>;
};
export default CreateTripForm;
