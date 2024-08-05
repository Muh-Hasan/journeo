import React from 'react';

import LocationCard from '@/components/trip/location-card';
import TravelModeDropDown from '@/components/trip/travel-mode-dropdown';

const Page = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="container">
        <section>
          <LocationCard
            location="Creek Park"
            desc="Lush waterside park with kids play areas, a cable car, an
              amphitheatre & restaurants."
            image="/placeholder_location.png"
            time={{ start: 1722744000, end: 1722751200 }}
          />
          <TravelModeDropDown
            options={[
              {
                mode: 'car',
                linkToRoute: 'https://destino-dev.vercel.app/',
                time: 5,
              },
              {
                mode: 'bus',
                linkToRoute: 'https://destino-dev.vercel.app/',
                time: 10,
              },
              {
                mode: 'bike',
                linkToRoute: 'https://destino-dev.vercel.app/',
                time: 20,
              },
              {
                mode: 'walk',
                linkToRoute: 'https://destino-dev.vercel.app/',
                time: 40,
              },
            ]}
          />
          <LocationCard
            location="Creek Park"
            desc="Lush waterside park with kids play areas, a cable car, an
              amphitheatre & restaurants."
            image="/placeholder_location.png"
            time={{ start: 1722744000, end: 1722751200 }}
          />
        </section>
      </div>
      <div />
    </div>
  );
};

export default Page;
