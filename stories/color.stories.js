import { getColorVariables } from "./color.utils";

export default {
  title: "Colors",
  parameters: {
    layout: "fullscreen",
  },
};

const renderCell = (color) => `
  <div class="grid__cell" style="background: var(${color})">
    <span class="text" style="color: #ff00ff; mix-blend-mode: difference;">${color}</span>
  </div>
`;

const Template = () => {
  const colors = getColorVariables();

  return `
    <style>
      @media all and (min-width: 768px) and (max-width: 1280px) {
        .grid {
          grid-template-areas: 
            'cell-01 cell-02'
            'cell-03 cell-04'
            'cell-05 cell-06'
            'cell-07 cell-08'
            'cell-09 cell-10'
            'cell-11 cell-12'
            'cell-13 cell-14'
            'cell-15 cell-16';
        }
      }
      
      @media all and (min-width: 0px) and (max-width: 767px) {
        .grid {
          grid-template-areas: 
            'cell-01'
            'cell-02'
            'cell-03'
            'cell-04'
            'cell-05'
            'cell-06'
            'cell-07'
            'cell-08'
            'cell-09'
            'cell-10'
            'cell-11'
            'cell-12'
            'cell-13'
            'cell-14'
            'cell-15'
            'cell-16';
        }
      }
    </style>
    <div class="grid">
      ${colors.map(renderCell).join("")}
    </div>
  `;
};

export const All = Template.bind({});
