import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Effortless travel companion
            </h2>
            <p className="mt-6 leading-8 text-gray-600 sm:text-lg">
              Save time, eliminate stress, embark confidently, seamless travel
              experience. Start planning now, make every moment count.
            </p>
            <div className="mt-10">
              <Button size="lg">Start Planning Your Adventure</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
