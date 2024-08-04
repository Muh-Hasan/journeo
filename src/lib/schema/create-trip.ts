import { differenceInCalendarDays } from 'date-fns';
import { z } from 'zod';

const destDetailsSchema = z
  .object({
    destination: z.string().min(1, 'destination is required'),
    duration: z.object({
      to: z.date(),
      from: z.date(),
    }),
    preferenceTime: z.string().min(1, 'Select atleast one of the options'),
    visibility: z.boolean(),
  })
  .refine(
    ({ duration }) =>
      duration.from &&
      duration.to &&
      differenceInCalendarDays(duration.to, duration.from) <= 90,
    {
      message: 'The vaction must be within 90 days time period.',
      path: ['duration'],
    },
  );

const flightDetailsSchema = z.object({
  flight: z.string(),
});

const hotelDetailsSchema = z
  .object({
    booking: z.string().min(1, 'Booking confirmation is required'),
    hotelName: z.string().min(1, 'Hotel name is required'),
    hotelPhone: z.string().optional(),
    location: z.string().min(1, 'Location is required'),
    checkIn: z.object({
      start: z.date(),
      end: z.date(),
    }),
  })
  .refine(({ checkIn: { start, end } }) => start && end && start <= end, {
    message: 'The end date cannot be before the start date.',
    path: ['checkIn', 'end'],
  });

export { destDetailsSchema, flightDetailsSchema, hotelDetailsSchema };
