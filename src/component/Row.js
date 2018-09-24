import React from 'react'
// Row - строка таблицы, dataElement obj
function Row(props) {
   const dataElement = props.dataElement
  return ( [
    // Массив ячеек таблицы
      <td key={dataElement.id}>{dataElement.id}</td>,
      <td key={dataElement.firstName}>{dataElement.firstName}</td>,
      <td key={dataElement.lastName}>{dataElement.lastName}</td>,
      <td key={dataElement.email}>{dataElement.email}</td>,
      <td key={dataElement.phone}>{dataElement.phone}</td>
  ]
  )
}

export default Row
