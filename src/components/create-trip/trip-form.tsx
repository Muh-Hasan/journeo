'use client';

import { IconChevronLeft } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useFormContext } from './form-provider';
import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

type FormStep = 1 | 2 | 3;

const formSteps: Record<FormStep, React.ComponentType> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
};

const CreateTripForm = () => {
  const {
    form: { handleSubmit },
    step,
    onSubmit,
    setStep,
  } = useFormContext();

  const CurrentStep = formSteps[step as FormStep] || null;

  return (
    <Card className="w-full space-y-8 md:w-[512px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <button
            aria-label="Button Button"
            type="button"
            className={cn(step === 1 && 'hidden')}
            onClick={() => setStep((s) => s - 1)}
          >
            <IconChevronLeft className="size-6" />
          </button>
          <CardTitle>Plan Your Next Trip</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {CurrentStep && <CurrentStep />}
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateTripForm;
