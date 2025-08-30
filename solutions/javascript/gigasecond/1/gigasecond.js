//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//1,000,000,000 gigasecond

export const gigasecond = (date) => {
   const gigasecondINMS = 1_000_000_000 * 1000;
  return new Date(date.getTime() + gigasecondINMS);
};
