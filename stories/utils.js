const colorPrefix = '--color-'

export function getColorVariables() {
  return Array.from(document.styleSheets)
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
}

export function getColorNames() {
  const colorVariables = getColorVariables()

  return colorVariables.map(colorVariable => {
    return colorVariable.replace(colorPrefix, '')
  })
}