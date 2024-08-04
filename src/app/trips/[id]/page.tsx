import React from 'react';

import LocationCard from '@/components/trip/location-card';

const Page = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="container">
        <div>
          <LocationCard
            location="Creek Park"
            desc="Lush waterside park with kids play areas, a cable car, an
              amphitheatre & restaurants."
            image="/placeholder_location.png"
            time={{ start: 1722744000, end: 1722751200 }}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Page;
