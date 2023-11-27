export function isWithinDays(
  targetDate: string,
  daysRemaining: number = 7
): boolean {
  const [day, month, year] = targetDate.split('.').map((el) => parseInt(el));

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    console.error('Передан неверный формат даты');
    return false;
  }

  const targetDateTime: Date = new Date(year, month - 1, day);
  const currentDate: Date = new Date();

  const differenceInMilliseconds: number =
    targetDateTime.getTime() - currentDate.getTime();
  const millisecondsPerDay: number = 24 * 60 * 60 * 1000;
  const differenceInDays: number =
    differenceInMilliseconds / millisecondsPerDay;

  return differenceInDays <= daysRemaining;
}
