import React, { Component } from 'react';
import './App.css'
import Table1 from './Table1';

var list = []


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
        fetchPlanets();
        fetch('https://swapi.co/api/planets/')
            // convert to json format
            .then(response => response.json())
            .then(json => {
                console.log(json)
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
                </div>
            );
        }
    }
}

function fetchPlanets(){
    var pagesRequired = 7;
    const apiPromises = [];
    var base = "https://swapi.co/api/planets/?page=";
    for(var i = pagesRequired; i > 0; i--){
        apiPromises.push(fetch(base + i));
        console.log(base + i)
    }
    Promise.all(apiPromises).then(responses => {
        const processedResponses = [];
        // map each response into an array
        responses.map(response => {
            processedResponses.push(response)
        })
        processedResponses[1].json().then(data => {
            console.log(data.results[2])
        })
        console.log(list)
    })

}
export default App;
