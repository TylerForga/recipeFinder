import React from 'react';

export default class ApiCall extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        recipe: []
      };
    }
  
    componentDidMount() {
      this.ApiCall();
    }
  
    ApiCall() {
      fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then(({ results }) => this.setState({ recipe: results }));
    }
  
    render() {
      const recipes = this.state.recipe.map((item) => (
        <div>
          { item.name }, { item.id }, { item.amount }
        </div>
      ));
  
      return (
        console.log({recipes})
        
      );
    }
  }
 