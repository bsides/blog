function monthNames() {
  return Array.from({ length: 12 }, (x, index) =>
    new Date(0, index).toLocaleDateString('pt-BR', { month: 'short' })
  )
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function formatDateToLocale(theDate) {
  return `${theDate.getDate()} / ${
    monthNames()[theDate.getMonth()]
  } / ${theDate.getFullYear()}`
}

export { monthNames, capitalizeFirstLetter, formatDateToLocale }
