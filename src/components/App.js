// App.js
import React, { Component } from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      name: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    alert('Form was submitted');
  }

  handleChange(event) {
      let newName = event.target.value;
      this.setState({ name: newName });
    }

  handleButtonClick(event) {
    alert('Button was clicked');
  }

  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm handleFormSubmit={this.handleFormSubmit} name={this.stateName} />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
