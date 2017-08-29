import React, { Component } from 'react';
import SearchRecipies from './SearchRecipies';
import '../main.css';

class App extends Component {
    render() {
        return(
            <div>
                <h2 className="display-4">Recipe Finder</h2>
                <SearchRecipies />
            </div>
        )
    }
}

export default App;