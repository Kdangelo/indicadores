import React, { Component } from 'react';

const API_KEY = 'e4eadc888ee41d9749a44fc89010e288a849004b';

export class SearchFormD extends Component {
  state = {
    inputDate: ''
  }

  _handleChange = (e) => {
    this.setState({ inputDate : e.target.value })
    
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputDate } = this.state
    fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${inputDate}?apikey=${API_KEY}&formato=json&callback=${inputDate}`)
      .then(res => res.json())
      .then(results => {
        const { Dolares, totalResults } = results
        console.log({ Dolares, totalResults })
        this.props.onResults(Dolares)
      })
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input"
              onChange={this._handleChange} 
              type="text"
              placeholder="ej: año/mes/año2/mes2" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}