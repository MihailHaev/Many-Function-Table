import React, {PureComponent} from 'react'


// Отображает дополнительную информация у кликнутого столбца
class RowInfo extends PureComponent {

  render() {
    // Преобразовываем поступившие к нам пропсы в массив
    const {openRowId, tableData} = this.props
    let selectedRow = null
    for (let i = 0; i < this.props.tableData.length; i++) {
      if (tableData[i].id === openRowId) {
        selectedRow = tableData[i];
      }
        }
    const info = selectedRow && <div className='card border'>
          Выбран пользователь: <b>{selectedRow.firstName} {selectedRow.lastName}</b>
          Описание:
          <textarea>
          {selectedRow.description}
          </textarea>
          Адрес проживания: <b>{selectedRow.address.streetAddress}</b>
          Город: <b>{selectedRow.address.city}</b>
          Провинция/штат: <b>{selectedRow.address.state}</b>
          Индекс: <b>{selectedRow.address.zip}</b>
        </div>
    return (
    <div style={{width: '25%', marginRight: '5%', float: 'right'}}>
      {info}
    </div>
     
       )}
}

export default RowInfo