import { getColorNames } from "./color.utils";

export default {
  title: "Text",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => `
  <div class="text">text</div>
`;

export const Colored = () => {
  const colorNames = getColorNames();
  return `
    ${colorNames
      .map((colorName) => `<div class="text text--${colorName}">text</div>`)
      .join("")}
`;
};

export const Sized = () => `
    <div class="text text--small">small</div>
    <div class="text text--medium">medium</div>
    <div class="text text--big">big</div>
    <div class="text text--huge">huge</div>
`;
