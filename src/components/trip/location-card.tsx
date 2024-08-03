import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
// import TimeSelectDropdown from "./time-select-dropdown";

const LocationCard = () => {
  return (
    <div className="flex gap-1.5">
      <Card className="group w-full cursor-pointer p-3 shadow-none transition-all  hover:border-gray-300 md:hover:bg-gray-50">
        <CardContent className="flex gap-3 p-0">
          <div className="group/image relative float-left mb-1 mr-2 h-[60px] min-w-[60px] overflow-hidden rounded-lg bg-cover bg-center object-cover shadow-md md:float-none md:!m-0 md:h-[68px] md:min-w-[68px]">
            <Image
              src="/placeholder_location.png"
              width={1000}
              height={1000}
              className="size-full overflow-hidden rounded-lg object-cover"
            />
          </div>
          <div>
            <CardTitle className="line-clamp-1 text-base md:group-hover:underline">
              Creek Park
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm text-gray-500">
              Lush waterside park with kids play areas, a cable car, an
              amphitheatre & restaurants.
            </CardDescription>
            {/* <div className="hidden sm:block">
              <TimeSelectDropdown />
            </div> */}
          </div>
        </CardContent>
        {/* <div className="block sm:hidden">
          <TimeSelectDropdown />
        </div> */}
      </Card>
      <div className="flex flex-col gap-1">
        <Button className="size-7 cursor-grab bg-transparent p-1 text-base text-gray-300 hover:bg-gray-100 hover:text-gray-500">
          <IconGripVertical className="size-4" />
        </Button>
        <Button className="size-7 bg-transparent p-1 text-base text-gray-300 hover:bg-red-100/50 hover:text-red-500">
          <IconTrash className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;
