// utils.jsx

/**
 * Formats a date and time input into the format dd/mm/yyyy hh:mm.
 * @param {string} value - The raw input value.
 * @returns {string} - The formatted date and time.
 */
export const formatDateTime = (value) => {
    const dateAndTime = value.replace(/\D/g, '');
    const dateAndTimeLength = dateAndTime.length;
  
    if (dateAndTimeLength < 3) return dateAndTime;
    if (dateAndTimeLength < 5) return `${dateAndTime.slice(0, 2)}/${dateAndTime.slice(2)}`;
    if (dateAndTimeLength < 9) return `${dateAndTime.slice(0, 2)}/${dateAndTime.slice(2, 4)}/${dateAndTime.slice(4)}`;
    if (dateAndTimeLength < 11) return `${dateAndTime.slice(0, 2)}/${dateAndTime.slice(2, 4)}/${dateAndTime.slice(4, 8)} ${dateAndTime.slice(8)}`;
    return `${dateAndTime.slice(0, 2)}/${dateAndTime.slice(2, 4)}/${dateAndTime.slice(4, 8)} ${dateAndTime.slice(8, 10)}:${dateAndTime.slice(10, 12)}`;
  };
  
  /**
   * Formats a date input into the format dd/mm/yyyy.
   * @param {string} value - The raw input value.
   * @returns {string} - The formatted date.
   */
  export const formatDate2 = (value) => {
    const date = value.replace(/\D/g, '');
    const dateLength = date.length;
  
    if (dateLength < 3) return date;
    if (dateLength < 5) return `${date.slice(0, 2)}/${date.slice(2)}`;
    return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 8)}`;
  };
  