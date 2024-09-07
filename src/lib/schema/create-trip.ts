import { differenceInCalendarDays, isBefore, parse } from 'date-fns';
import { z } from 'zod';

const requiredErrorMessage = 'This field is required';

const isStartTimeBeforeEndTime = (start?: string, end?: string): boolean => {
  if (start && end) {
    const startTime = parse(start, 'hh:mm a', new Date());
    const endTime = parse(end, 'hh:mm a', new Date());
    return isBefore(startTime, endTime);
  }
  return true;
};

export const CreateTripSchema = z.object({
  city: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),

  duration: z
    .object({
      to: z.date(),
      from: z.date(),
    })
    .refine(({ from, to }) => differenceInCalendarDays(to, from) <= 90, {
      message: 'The duration must be within a 90-day time period.',
    }),

  day: z
    .object({
      start: z.string().optional(),
      end: z.string().optional(),
    })
    .refine(({ start, end }) => isStartTimeBeforeEndTime(start, end), {
      message: 'Start time must be before end time',
    }),

  visibility: z.boolean(),

  flightFrom: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),

  flightNo: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),

  ticketNo: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),

  hotelBooking: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),

  hotel: z
    .string({ required_error: requiredErrorMessage })
    .min(1, requiredErrorMessage),
});
