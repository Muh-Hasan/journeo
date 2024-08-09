import { differenceInCalendarDays, isAfter } from 'date-fns';
import { z } from 'zod';

export const CreateTripSchema = z.object({
  destination: z.string().min(1, 'destination is required'),
  duration: z
    .object({
      to: z.date(),
      from: z.date(),
    })
    .refine(
      (duration) =>
        duration.from &&
        duration.to &&
        differenceInCalendarDays(duration.to, duration.from) <= 90,
      {
        message: 'The vaction must be within 90 days time period.',
      },
    ),
  times: z
    .object({
      start: z.number(),
      end: z.number(),
    })
    .refine((elem) => elem.start && elem.end, {
      message: 'Timings are required',
    }),
  visibility: z.boolean(),
  flight: z.string().optional(),
  hotelBooking: z.string().min(1, 'Booking confirmation is required'),
  hotelName: z.string().min(1, 'Hotel name is required'),
  hotelPhone: z.string().optional(),
  hotelLocation: z.string().min(1, 'Location is required'),
  checkIn: z
    .object({
      start: z.date(),
      end: z.date(),
    })
    .refine(({ start, end }) => start && end && isAfter(end, start), {
      message: 'The end date cannot be before the start date.',
      path: ['end'],
    }),
});
