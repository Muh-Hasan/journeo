'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { CreateTripSchema } from '@/lib/schema/create-trip';
import type { CreateTripType } from '@/lib/types/create-trip';

import { Form } from '../ui/form';

interface FormContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  form: UseFormReturn<CreateTripType>;
  onSubmit: (data: CreateTripType) => Promise<void>;
  loading: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const form = useForm<CreateTripType>({
    resolver: zodResolver(CreateTripSchema),
    defaultValues: {
      day: {
        start: '09:00 AM',
        end: '09:00 PM',
      },
      duration: {
        from: new Date(),
        to: new Date(),
      },
    },
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: CreateTripType) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    // eslint-disable-next-line
    <FormContext.Provider value={{ step, setStep, form, onSubmit, loading }}>
      <Form {...form}>{children}</Form>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
