import { FormProvider } from '@/components/create-trip/form-provider';
import CreateTripForm from '@/components/create-trip/trip-form';

export default function CreateTrip() {
  return (
    <div className="flex grow items-center justify-center">
      <FormProvider>
        <CreateTripForm />
      </FormProvider>
    </div>
  );
}
