export const getDifferenceInYears = (year: number): number => {
  const now = new Date();

  return now.getFullYear() - year;
}
