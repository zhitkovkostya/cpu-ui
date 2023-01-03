/**
 * Generates grid cell markup
 * @param {String} props.text content
 * @param {String} props.color background color
 * @returns {String}
 */
export const renderGridCell = ({ text, color }) => {
  const baseClassName = "grid__cell";
  const classNames = [
    baseClassName,
    color ? `${baseClassName}--${color}` : null,
  ].join(" ");
  return `
    <div class="${classNames}">
      <div class="text">${text}</div>
    </div>
  `;
};
