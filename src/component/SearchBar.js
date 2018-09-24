import React from 'react';
// term - значение строки поиска Str | data - данные Arr | update - функция обновления Func
export default ({ term, data, update }) => {
  // Данная функция вызывается каждый раз, при изменение с строке инпута, e - eventTarget
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();
    
    // filter - отфильтрованные массив, подходящий под запрос Arr
    const filter = data.filter(tableData => {
      // Проверка каждого свойства объекта на соответствие
      return ((String(tableData.id).includes(value))
       || tableData.firstName.toLowerCase().includes(value)
       || tableData.lastName.toLowerCase().includes(value)
       || tableData.email.toLowerCase().includes(value)
       || tableData.phone.toLowerCase().includes(value));
    });
    // Обновление данных
    update({
      data: filter,
      term: value
    });
  }
  return (
    <div>
      <input
        value={term}
        type="text"
        placeholder="Найти..."
        onChange={dataSearch}
        className="border"
        style={{marginBottom: '5px', marginLeft: '46%'}}
      />
    </div>
  );
};