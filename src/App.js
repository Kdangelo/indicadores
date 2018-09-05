import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchFormUf } from './components/SearchFormUf';
import { SearchFormD } from './components/SearchFormD';

import './App.css';
import 'bulma/css/bulma.css';
import { SubTitle } from './components/SubTitle';

class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  _renderResults () {
    const { results } = this.state
    return results.map(indicador => {
      return <p>{indicador.Valor}</p>
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Buscador de UF y dólar</Title>
        <SubTitle>UF buscador</SubTitle>
        <div className='SearchForm-wrapper'>
          <SearchFormUf onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
          ? <p></p>
          : this._renderResults()
        }
        <SubTitle>Dólar buscador</SubTitle>
        <div className='SearchForm-wrapper'>
          <SearchFormD onResults={this._handleResultsTwo} />
        </div>
        {this.state.results.length === 0
          ? <p></p>
          : this._renderResults()
        }
      </div>
    );
  }
}

export default App;
