import React from 'react';

import LocationCard from '@/components/trip/location-card';

const Page = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="container">
        <div>
          <LocationCard />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Page;
