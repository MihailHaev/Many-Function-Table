import React, {PureComponent} from 'react';
import Row from './Row';
import RowInfo from './RowInfo';

class Table extends PureComponent {
  
  state ={
    openRowId: null,
    isIdUp: false,
    isFirstNameUp: false,
    isLastNameUp: false,
    isEmailUp: false,
    isPhoneUp: false,
    currentPage: 1,
    rowsPerPage: 7
  }

  isOpen = false

  render() {
    const currentPage = this.state.currentPage
    const rowsPerPage = this.state.rowsPerPage
    const indexOfLastRow = currentPage * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = this.props.tableData.slice(indexOfFirstRow, indexOfLastRow)

    const rowsElements = currentRows.map((row, index) => 
    <tr
      key={row.id}
      onClick={this.openInfo.bind(this, row.id)}>
        <Row dataElement={row}/>
    </tr>
    )

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(this.props.tableData.length / rowsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (<li
        key={number}
        id={number}
        onClick={this.changePage}
        className='btn btn-primary'
        style={{marginRight: '5px'}}
        >
        {number}
        </li>
    )})
    return (
      <div>
        <RowInfo openRowId={this.state.openRowId} tableData={this.props.tableData} />
      <table className='table' style={{width: '70%', display: 'inline-block'}}>
        <tr className='table-row'>
          <th>id <button onClick={this.sortId} className='btn btn-primary'>
            {this.state.isIdUp ? '▲' : '▼'}
          </button></th>
          <th>firstName <button onClick={this.sortFirstName} className='btn btn-primary'>
            {this.state.isFirstNameUp ? '▲' : '▼'}
          </button></th>
          <th>lastName <button onClick={this.sortLastName} className='btn btn-primary'>
            {this.state.isLastNameUp ? '▲' : '▼'}
          </button></th>
          <th>email <button onClick={this.sortEmail} className='btn btn-primary'>
            {this.state.isEmailUp ? '▲' : '▼'}
          </button></th>
          <th>phone <button onClick={this.sortPhone} className='btn btn-primary'>
            {this.state.isPhoneUp ? '▲' : '▼'}
          </button></th>
        </tr>
        {rowsElements}
      </table>
      <ul style={{listStyle: 'none'}}>
      {renderPageNumbers}
      </ul>
      </div>
    )
  }

  changePage = (event) => {
    this.setState({
      currentPage: event.target.id
    })
  }

  openInfo = (openRowId) => {
    this.setState({
    openRowId: openRowId
  })
}
  
  sortId = () => {
    this.setState({
      isIdUp: !this.state.isIdUp,
      isFirstNameUp: false,
      isLastNameUp: false,
      isEmailUp: false,
      isPhoneUp: false
    })
    console.log(this.state.rowsPerPage);
    this.props.tableData.sort((a,b) => {
      
      return (!this.state.isIdUp) ?  ((a.id > b.id) ? 1 : -1) : ((b.id > a.id) ? 1 : -1);
    })
  }

  sortFirstName = () => {
    this.setState({
      isFirstNameUp: !this.state.isFirstNameUp,
      isIdUp: false,
      isLastNameUp: false,
      isEmailUp: false,
      isPhoneUp: false
    })

    this.props.tableData.sort((a,b) => {
      return (!this.state.isFirstNameUp) ?  ((a.firstName > b.firstName) ? 1 : -1)
       : ((b.firstName > a.firstName) ? 1 : -1);
    })
  }

  sortLastName = () => {
    this.setState({
      isLastNameUp: !this.state.isLastNameUp,
      isIdUp: false,
      isFirstNameUp: false,
      isEmailUp: false,
      isPhoneUp: false
    })
    
    this.props.tableData.sort((a,b) => {
      return (!this.state.isLastNameUp) ?  ((a.lastName > b.lastName) ? 1 : -1) : ((b.lastName > a.lastName) ? 1 : -1);
    })
  }

  sortEmail = () => {
    this.setState({
      isEmailUp: !this.state.isEmailUp,
      isIdUp: false,
      isFirstNameUp: false,
      isLastNameUp: false,
      isPhoneUp: false
    })

    this.props.tableData.sort((a,b) => {
      return (!this.state.isEmailUp) ?  ((a.email > b.email) ? 1 : -1) : ((b.email > a.email) ? 1 : -1);
    })
  }

  sortPhone = () => {
    this.setState({
      isPhoneUp: !this.state.isPhoneUp,
      isIdUp: false,
      isFirstNameUp: false,
      isLastNameUp: false,
      isEmailUp: false
    })

    this.props.tableData.sort((a,b) => {
      return (!this.state.isPhoneUp) ?  ((a.phone > b.phone) ? 1 : -1) : ((b.phone > a.phone) ? 1 : -1);
    })
  }
}

  

export default Table