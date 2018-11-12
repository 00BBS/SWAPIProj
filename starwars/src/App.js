import React, { Component } from 'react';
 

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
            // arrow functions is used to not lose
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
        var { isLoaded, items } = this.state;

        if(!isLoaded){
            return(
                <div> Data is loading </div>
            );
        }
        else{
            return (
              // create unordered list
              // use map function which creates new array, which loops all objects from API 
                <div className="App">
                    <ul>
                        {items.results.map(item => (
                            <li key = {item.name}>
                                {item.name}
                            </li>
                          ))}
                    </ul>
                    Data has been loaded.
                </div>
            );
        }


    }
}

export default App;
