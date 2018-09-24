import React, {PureComponent} from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import load from '../utils/load';
// props: data - переданная ссылка на данные Str
class App extends PureComponent {

  constructor(props) {
    super(props);
    // Устанавливаем состояние компонента
    this.state = {
      data: [],  // Данные 
      term: '' // Начальный поиск
    };
    // Сразу загружаем данные
    this.loadData();
  }
// Загружаем данные через промисс
  loadData() {
    load(this.props.data).then(rows => {
      // Устанавливаем начальное значение, чтоб при поиске оно не изменялось
      this.tableData = JSON.parse(rows)  
      this.setState({
        // Устанавливаем наши данные
        data: JSON.parse(rows)   
      });
    });
  }


  render() {  
    // Возвращяем таблицу и инпут поиска
    return (
      <div className='container'>
        <h1 className='display-6'
        style={{marginLeft: '25%'}}>
          My Table
        </h1>
        <SearchBar term={this.state.term} data={this.tableData} update={this.updateData.bind(this)}/>
        <Table tableData={this.state.data}/> 
      </div>  
    )

    
  }
  // Устанавливаем функцию обновления данных
  updateData = config => {
    this.setState(config);
  }

}

export default App;