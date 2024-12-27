/**
 * Trims a given string to a specified length and appends an ellipsis ("...") if it exceeds that length.
 *
 * @param {string} name - The text to be trimmed.
 * @param {number} [length=30] - The maximum allowed length of the string before trimming.
 * @returns {string} - The trimmed string with an ellipsis if it exceeds the specified length, or the original string if not.
 */
export const trimName = (name, length = 30) => {
  return name.length > length ? `${name.slice(0, length)}...` : name;
};
