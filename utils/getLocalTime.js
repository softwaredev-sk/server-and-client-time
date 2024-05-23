export default function getLocalDateTime(date) {
  const receivedDate = date || new Date();
  const newDate = new Date(receivedDate);
  return newDate.toLocaleString().toUpperCase();
}
