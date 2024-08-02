'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Props {
  stepfn: any;
  datafn: any;
}

const HotelDetails: React.FC<Props> = ({ stepfn }) => {
  return (
    <form className="h-full w-auto space-y-6">
      <div className="text-center text-4xl">Select Accomodation</div>

      <ToggleGroup type="single" className="flex w-[600px] flex-col p-2">
        <ToggleGroupItem
          value="hotel-1"
          aria-label="Hotel-1"
          className="w-full rounded-lg border py-10 data-[state=on]:border data-[state=on]:border-black"
        >
          Hotel Option 1
        </ToggleGroupItem>
        <ToggleGroupItem
          value="hotel-2"
          aria-label="Hotel-2"
          className="w-full rounded-lg border py-10 data-[state=on]:border data-[state=on]:border-black"
        >
          Hotel Option 2
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="my-1 flex h-auto w-full">
        <Separator className="my-4 w-[47%] border-t border-gray-300" />
        <p className="flex items-center justify-center px-2 text-lg">or</p>
        <Separator className="my-4 w-[47%] border-t border-gray-300" />
      </div>
      <div className="cursor-pointer font-semibold underline">
        I am already done with accomodation
      </div>

      <div className="flex justify-between">
        <Button onClick={() => stepfn(3)}>Prev</Button>
        <Button onClick={() => stepfn(5)}>Next</Button>
      </div>
    </form>
  );
};

export default HotelDetails;
