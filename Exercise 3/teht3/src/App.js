import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      hakut: "",
    }
  }

  haku = (event) => {
    this.setState({ hakut: event.target.value });
  }

  render()
  {

    return (
      <>
      <div>
        haku <input type="text" onChange={ this.haku } value={ this.state.hakut }/>
      </div>
      <SearchView
        items={ this.state.items.filter((item) =>
           item.name.toLowerCase().includes(this.state.hakut.toLowerCase())) }
        />
    </>
    )
  }
}

export default App;