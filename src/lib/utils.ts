import { type ClassValue, clsx } from 'clsx';
import {
  addHours,
  addMinutes,
  format,
  fromUnixTime,
  getTime,
  isBefore,
  parse,
  startOfDay,
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateTimeOptions = (
  baseDate: number,
  startOfDayStr: string = '12:00 AM',
  endOfDayStr: string = '11:30 PM',
): { unix: number; display: string }[] => {
  const start = parse(startOfDayStr, 'h:mm a', fromUnixTime(baseDate));
  const end = parse(endOfDayStr, 'h:mm a', fromUnixTime(baseDate));

  const options: { unix: number; display: string }[] = [];
  let currentTime = start;

  while (currentTime <= end) {
    const unixTime = getTime(currentTime) / 1000;
    const displayTime = format(currentTime, 'h:mm a');
    options.push({ unix: unixTime, display: displayTime });
    currentTime = addMinutes(currentTime, 30);
  }

  return options;
};

export const generateTimeOptionsInStr = (): string[] => {
  const options: string[] = [];
  const start = startOfDay(new Date());
  const end = addHours(start, 24);
  let currentTime = start;

  while (isBefore(currentTime, end)) {
    options.push(format(currentTime, 'hh:mm a'));
    currentTime = addMinutes(currentTime, 30);
  }

  return options;
};
