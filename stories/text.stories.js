import {getColorNames} from './utils';

export default {
  title: 'Text'
}

export const basic = () => `
    <div class="text">text</div>
`

export const colored = () => {
  const colorNames = getColorNames();
  return `
    ${colorNames.map(colorName => `<div class="text text--${colorName}">text</div>`).join('')}
`}

export const sized = () => `
    <div class="text text--small">small</div>
    <div class="text text--small">text</div>
    <div class="text text--medium">medium</div>
    <div class="text text--medium">text</div>
    <div class="text text--big">big</div>
    <div class="text text--big">text</div>
    <div class="text text--huge">huge</div>
    <div class="text text--huge">text</div>
`
