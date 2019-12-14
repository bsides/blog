import React from 'react'
import reactStringReplace from 'react-string-replace'
import Separator from '../components/styled/Separator'

function monthNames() {
  return Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleDateString('pt-BR', { month: 'short' })
  )
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function formatDateToLocale(theDate) {
  const finalString = `${theDate.getDate()} / ${
    monthNames()[theDate.getMonth()]
  } / ${theDate.getFullYear()}`
  return reactStringReplace(finalString, '/', match => (
    <Separator>{match}</Separator>
  ))
}

export { monthNames, capitalizeFirstLetter, formatDateToLocale }
