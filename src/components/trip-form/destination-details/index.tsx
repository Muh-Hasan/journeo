'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type FormFields from '../interface';
import TopPick from './top-pick-card';

interface Props {
  stepfn: any;
  datafn: any;
  formData: FormFields;
}

const DestinationDetails: React.FC<Props> = ({ stepfn }) => {
  const array = Array(6).fill({
    img: '/placeholder_location.png',
    city: 'Dubai',
    country: 'UAE',
  });

  return (
    <form className="space-y-8">
      <div className="text-center text-3xl">Select the Perfect Destination</div>

      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-0 top-[30%] mx-3" />
        <Input placeholder="Search any city" className="px-9 " />
      </div>

      <div className="space-y-1">
        <p className="text-xl font-semibold">Top Picks For You</p>
        <div className="grid grid-cols-4">
          {array &&
            array.map(({ img, city, country }) => (
              <TopPick key={city} img={img} city={city} country={country} />
            ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" onClick={() => stepfn(2)}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default DestinationDetails;
