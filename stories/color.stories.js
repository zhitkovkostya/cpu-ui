import {getColorVariables} from './utils';

export default {
  title: 'Color'
}

export const basic = () => {
  const colorVariables = getColorVariables()

  return `
      <div class="grid">
          ${colorVariables.map(colorVariable => `
              <div class="grid__cell" style="background: var(${colorVariable})"></div>
          `).join('')}
      </div>
  `
}
