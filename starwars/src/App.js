import React, { Component } from 'react';
import './App.css'
import Table1 from './Table1';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // boolean variable
            isLoaded: false,
            items: [],
        }
    }

    // runs after render method, and updates render to output resources
    componentDidMount(){
        this.fetchPlanets();
    }

    // method to fetch planets by page
    fetchPlanets(){
        var pagesRequired = 7;
        var base = "https://swapi.co/api/planets/?page=";
        for(var i = 1; i <= pagesRequired; i++){
            fetch(base + i).then(res => res.json()).then(json =>{
                var connected = this.state.items.concat(json.results);
                this.setState({
                    items: connected
                })
            }).then(final => {
                this.setState({
                    isLoaded: true
                })
            })
        }
    }

    // method to sort planets alphabetically ascending
    sortPlanetsA(items){
        items.sort( function( a, b ) {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        });

        this.setState({
            items
        })
    }

    // method to sort planets alphabetically descending
    sortPlanetsD(items){
        items.sort( function( a, b ) {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return (a > b) ? -1 : (a < b) ? 1 : 0;
        });

        this.setState({
            items
        })
    }

    // method to sort planets by population ascending
    sortPlanetsPopA(items){
        items.sort( function( a,b ){
            return a.population - b.population;
        });
        this.setState({
            items
        })
    }

    // method to sort planets by population descending
    sortPlanetsPopD(items){
        items.sort( function( a,b ){
            return b.population - a.population;
        });
        this.setState({
            items
        })
    }

    // render method responsible for producing output
    render() {
        // create variable to access items in state
        var { 
                isLoaded,
                items,  } = this.state;



        if(!isLoaded){
            return(
                <div> Data is loading </div>
            );
        }
        else{
            console.log(items)
            return (
                <div className="App">
                    <p className="Table-header">The Planets of Star Wars</p>
                    <button type="submit" onClick={() => { this.sortPlanetsA(items) }}>Sort Alphabetically Asc</button>
                    <button type="submit" onClick={() => { this.sortPlanetsD(items) }}>Sort Alphabetically Desc</button>
                    <button type="submit" onClick={() => { this.sortPlanetsPopA(items) }}>Sort Population Asc</button>
                    <button type="submit" onClick={() => { this.sortPlanetsPopD(items) }}>Sort Population Desc</button>
                    <Table1 data={items}/>
                </div>
            );
        }
    }
}        
export default App;
