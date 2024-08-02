interface FormFields {
  destination: {
    city: string;
    country: string;
  };
  date: {
    to: string | Date;
    from: string | Date;
  };
  mode: string;
  activites: string[];
  flight?: string | undefined;
  accomodation?: string | undefined;
}

export default FormFields;
