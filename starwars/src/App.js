import React, { Component } from 'react';
import './App.css'
import Table1 from './Table1';

var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];


class App extends Component {
    constructor(){
        super();
        this.state = {
            // array which stores items from SWAPI 
            items: [],
            // boolean variable
            isLoaded: false,
        }
    }
    // runs after render method, and updates render to output resources
    componentDidMount(){
        fetch('https://swapi.co/api/planets/')
            // convert to json format
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    // render method responsible for producing output
    render() {

        // create variable to access items in state
        var { 
                isLoaded, 
                items       } = this.state;

        if(!isLoaded){
            return(
                <div> Data is loading </div>
            );
        }
        else{
            return (
                <div className="App">
                    <p className="Table-header">Basic Table</p>
                    <Table1 data={items.results}/>
                    Data has been loaded.
                </div>
            );
        }
    }
}


export default App;
