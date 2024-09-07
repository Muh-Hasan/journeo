import { IconCalendarEvent } from '@tabler/icons-react';
import { format, isBefore } from 'date-fns';
import type { FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn, generateTimeOptionsInStr } from '@/lib/utils';

import { Input } from '../ui/input';
import { Toggle } from '../ui/toggle';
import { useFormContext } from './form-provider';

const renderDate = (field: FieldValues) => {
  const { from, to } = field.value || {};
  // eslint-disable-next-line no-nested-ternary
  return from ? (
    to ? (
      `${format(from, 'LLL dd, y')} - ${format(to, 'LLL dd, y')}`
    ) : (
      format(from, 'LLL dd, y')
    )
  ) : (
    <span>Pick a date</span>
  );
};

const TimeSelect = ({
  label,
  name,
  timeOptions,
}: {
  label: string;
  name: 'day.start' | 'day.end';
  timeOptions: string[];
}) => {
  const { control } = useFormContext().form;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {timeOptions.map((time) => (
                <SelectItem value={time} key={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const StepOne = () => {
  const {
    form: { control, trigger },
    setStep,
  } = useFormContext();
  const timeOptions = generateTimeOptionsInStr();

  const handleSubmit = async () => {
    const isValid = await trigger([
      'city',
      'duration',
      'day.start',
      'day.end',
      'visibility',
    ]);
    if (isValid) setStep(2);
  };

  return (
    <>
      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select a city</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select dates</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      'w-full justify-center font-normal',
                      field.value?.to && 'text-muted-foreground',
                    )}
                  >
                    <IconCalendarEvent className="mr-2 size-4" />
                    {renderDate(field)}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    disabled={(date) => isBefore(date, new Date())}
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <TimeSelect
          label="Day start"
          name="day.start"
          timeOptions={timeOptions}
        />
        <TimeSelect label="Day end" name="day.end" timeOptions={timeOptions} />
      </div>
      <FormField
        control={control}
        name="visibility"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between">
            <FormLabel>Share Your Trip with Others?</FormLabel>
            <FormControl>
              <Toggle
                size="sm"
                aria-label="visibility toggle"
                onPressedChange={field.onChange}
                pressed={field.value}
              >
                {field.value ? 'Yes' : 'No'}
              </Toggle>
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="button" className="w-full" size="lg" onClick={handleSubmit}>
        Continue
      </Button>
    </>
  );
};

export default StepOne;
