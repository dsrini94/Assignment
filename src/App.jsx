import React, { Component } from 'react';

import Autocomplete from './components/Autocomplete';
import makeMultipleFetchCalls from './utils/fetchData';
import { URLs } from './utils/constants'

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchArray:[],
            productArray:[]
        }
    }

    componentDidMount() {
        makeMultipleFetchCalls(URLs).then(res => {
            this.setState({searchArray: res[0], productArray: res[1]});
        }).catch((err) => console.error(err));

    }
    render(){
        const { searchArray, productArray } = this.state;
        return(
            <div className="App">
                <Autocomplete
                    suggestions={searchArray} 
                    products={productArray} />
            </div>
        );
    }
}

export default App;