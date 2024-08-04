export interface FormFields {
  destination: string;
  duration: {
    to: Date | undefined;
    from: Date | undefined;
  };
  preferenceTime: string;
  visibility: boolean;
  flight?: string | undefined;
  hotelBooking: string;
  hotelName: string | undefined;
  hotelPhone?: string;
  hotelLocation: string;
  checkIn: {
    from: Date | undefined;
    to: Date | undefined;
  };
}
