export const FormatDate = (inputDate) => {
const date = new Date(inputDate);
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Get day, month, and year from the Date object
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date as "DD Mon, YYYY"
  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;

  return formattedDate;
}