import {colorsVariables} from './utils';

export default {
  title: 'Color'
}

export const basic = () => `
    <div class="grid">
        ${colorsVariables.map(colorVariable => `
            <div class="grid__cell" style="background: var(${colorVariable})"></div>
        `).join('')}
    </div>
`
