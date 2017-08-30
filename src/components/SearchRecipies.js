import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class SearchRecipies extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: "",
            dish: ""
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        fetch(url)
            .then(recipe => recipe.json())
            .then(data => console.log('data ===>', data))
    }


    render() {
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Galrli, Chicken" 
                        className="input" 
                        onChange={event => this.setState({ingredients: event.target.value})}
                        />
                </FormGroup>
                
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Food" 
                        className="input"
                        onChange={event => this.setState({dish: event.target.value})}
                        />
                </FormGroup>
                <Button
                    className="btn btn-dark"
                    onClick={() => this.search()}
                    >
                    Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipies;