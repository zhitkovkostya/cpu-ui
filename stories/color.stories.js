export default {
  title: 'Color'
}

var colors = Array.from(document.styleSheets)
  .filter(
    sheet =>
      sheet.href === null || sheet.href.startsWith(window.location.origin)
  )
  .reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ':root'
                ? [
                  ...def,
                  ...Array.from(rule.style).filter(name =>
                    name.startsWith('--color')
                  )
                ]
                : def),
          []
        )
      ]),
    []
  )

export const basic = () => `
    <div class="grid">
        ${colors.map(color => `<div class="grid__cell" style="background: var(${color})"></div>`).join('')}
    </div>
`
