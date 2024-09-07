import { FormProvider } from '@/components/create-trip/form-provider';
import CreateTripForm from '@/components/create-trip/trip-form';

export default function CreateTrip() {
  return (
    <section className="container flex grow items-center md:justify-center md:px-0">
      <FormProvider>
        <CreateTripForm />
      </FormProvider>
    </section>
  );
}
