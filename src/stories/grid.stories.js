export default {
  title: "Components/Grid",
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Generates grid cell markup
 * @param {String} props.text content
 * @param {String} props.color background color
 * @returns {String}
 */
const renderGridCell = ({ text, color }) => {
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

const Template = ({ isBordered = false, colors = [] }) => {
  const gridClassNames = ["grid", isBordered ? "grid--bordered" : null].join(
    " "
  );
  const items = Array(4)
    .fill(null)
    .map((_, i) => i + 1);
  const itemsHTML = items
    .map((item, i) => renderGridCell({ text: item, color: colors[i] }))
    .join("");

  return `
    <style>
      @media all and (min-width: 768px) and (max-width: 1280px) {
        .grid {
          grid-template-areas: 
            'cell-01 cell-02'
            'cell-03 cell-04';
        }
      }
      
      @media all and (min-width: 0px) and (max-width: 767px) {
        .grid {
          grid-template-areas: 
            'cell-01'
            'cell-02'
            'cell-03'
            'cell-04';
        }
      }
    </style>
    <div class="${gridClassNames}">
      ${itemsHTML}
    </div>
  `;
};

export const Basic = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  isBordered: true,
};

export const Colored = Template.bind({});
Colored.args = {
  colors: ["black", "gray-darkest", "gray-dark", "gray-middle"],
};
