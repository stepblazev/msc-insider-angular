export function formatDate(date: Date, template: string): string {
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  let formattedDate = template;
  formattedDate = formattedDate.replace('DD', day);
  formattedDate = formattedDate.replace('MM', month);
  formattedDate = formattedDate.replace('YYYY', year.toString());

  return formattedDate;
}
