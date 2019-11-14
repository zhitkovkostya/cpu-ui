const colorPrefix = '--color-'

export const colorsVariables = Array.from(document.styleSheets)
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
                    name.startsWith(colorPrefix)
                  )
                ]
                : def),
          []
        )
      ]),
    []
  )
console.log(colorsVariables)
export const colorNames = colorsVariables.map(colorsVariable => {
  return colorsVariable.replace(colorPrefix, '')
})