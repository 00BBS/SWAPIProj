import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class Table1 extends Component{
	render(){
		return(
			<div>
			    <BootstrapTable data={this.props.data}>
          			<TableHeaderColumn isKey dataField='name'>
            			Planet
          			</TableHeaderColumn>
          			<TableHeaderColumn dataField='population'>
            			Population
          			</TableHeaderColumn>
          			<TableHeaderColumn dataField='terrain'>
            			Terrain
      				</TableHeaderColumn>
        		</BootstrapTable>
			</div>
		);
	}
}

export default Table1;