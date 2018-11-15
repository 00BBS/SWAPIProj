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
        // this.fetchPlanets = this.fetchPlanets.bind(this);
    }

    // runs after render method, and updates render to output resources
    componentDidMount(){
        this.fetchPlanets();
    }

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
                    <Table1 data={items}/>
                </div>
            );
        }
    }
}        
export default App;
