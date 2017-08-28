import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../main.css';

class App extends Component {
    render() {
        return(
            <div className="container text-center" >
               <div className="row">
                   <div className="col-12">
                        <h1 className="display-3">Recipe Finder</h1>
                   </div>
                   <div className="col form-group form-inline">
                        <label>Ingredients</label>
                        <input type="text" className="form-control input"/>

                        <label>Dish</label>
                        <input type="text" className="form-control input"/>
                        <Button type="button" className="btn btn-outline-success" >Submit</Button>
                   </div>
               </div>
            </div>
        )
    }
}

export default App;