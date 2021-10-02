import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */


    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };


  }




  // Oma kikkailu tässä alhaalla joka toimii, siis päätehtävä 2 liittyen, lisäosa osittain kopioitu, muutettu omaa mallia
/*
  carrots = () => {
const arvo = Math.floor(Math.random() * 100);
this.setState({ items: [...this.state.items, {id: 5, value: 'Carrots', qty: arvo}]})
 
}



starberries = () => {
  const arvo = Math.floor(Math.random() * 100);
  this.setState({ items: [...this.state.items, {id: 5, value: 'StrawBerries', qty: arvo}]})
   
  }


  yogurt = () => {
    const arvo = Math.floor(Math.random() * 100);
    this.setState({ items: [...this.state.items, {id: 5, value: 'Yoghurt', qty: arvo}]})
     
    }
    
  beer = () => {
    const arvo = Math.floor(Math.random() * 100);
    this.setState({ items: [...this.state.items, {id: 5, value: 'Beer', qty: arvo}]})
     
    }


*/
  Foodfunction = (ruoka) => {
    return () => {
      const arvo = Math.floor(Math.random() * 30);
      const haku = this.state.items.findIndex((element, index, array) => {
        if (element.value === ruoka) {
         
         
          return true;
        }
        else {
         
         
          return false;
        }

      });


      if (haku != -1) {

        let uusiruoka = [...this.state.items];
        uusiruoka[haku].qty += arvo;

        this.setState({ items: uusiruoka });


      }

      else {

        this.setState({
          items:
            [...this.state.items,
            {
              id: this.state.items.length + 1,
              value: ruoka, 
              qty: arvo
            }
            ]
        });
      }
    }



  }
  render() {

    const { applicationDescription, applicationName } = this.props;
    return <div className={styles.shoppingList}>
      <Title
        applicationDescription={applicationDescription}
        applicationName={applicationName}
      />
      <ShoppingList items={this.state.items} />

      <button onClick={ this.Foodfunction('beer')} >Carrots</button>
      <button onClick={ this.Foodfunction('carrot')} >Strawberries</button>
      <button onClick={ this.Foodfunction('strawberries')} >Yogurt</button>
      <button onClick={ this.Foodfunction('yoghurts')} >Beer</button>
    </div>
  }
}

export default App;