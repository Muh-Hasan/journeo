import React, { Fragment } from 'react';

import DateSidebar from '@/components/trip/date-sidebar';
import DayInfo from '@/components/trip/day-info';
import LocationCard from '@/components/trip/location-card';
import TravelModeDropDown from '@/components/trip/travel-mode-dropdown';
import VerticalDivider from '@/components/trip/vertical-divider';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { travelModeOption, trip } from '@/lib/trip_data';

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <ScrollArea className="!sticky top-0 z-50 mb-4 mt-2 h-12 overflow-x-auto border-b border-gray-100 bg-gray-50 shadow-sm sm:hidden">
          <DateSidebar endDate={trip.to} startDate={trip.from} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <section className="container flex flex-col gap-x-5 sm:flex-row">
          <ScrollArea className="!sticky top-0 hidden h-screen w-14 sm:block">
            <DateSidebar endDate={trip.to} startDate={trip.from} />
          </ScrollArea>
          <section className="w-full">
            {trip.itinerary.map((t) => (
              <Fragment key={t.date}>
                <DayInfo day={t.date} />
                {t.activities.map((activity, activityIdx) => (
                  <Fragment key={activity.location}>
                    <LocationCard
                      location={activity.location}
                      desc={activity.description}
                      time={activity.time}
                      image="/placeholder_location.png"
                    />
                    {activityIdx < t.activities.length - 1 ? (
                      <TravelModeDropDown options={travelModeOption} />
                    ) : (
                      <VerticalDivider />
                    )}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </section>
        </section>
      </div>
      <div className="hidden lg:block" />
    </div>
  );
};

export default Page;
