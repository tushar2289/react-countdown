import React, { Component } from 'react'

class Datepicker extends Component {

  state = {
    date: ''
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleDateSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.date)
  }

  render() {

    const {date} = this.state

    return <form onSubmit={this.handleDateSubmit}>
            <div className="field is-grouped is-grouped-centered" style={{marginBottom: 40}}>
              <p className="control">
                <input  className="input is-medium is-rounded" 
                        value={date} 
                        placeholder="Type a date"
                        onChange={this.handleDateChange}
                />
              </p>
              <p className="control">
                <button className="button is-info is-medium is-outlined is-rounded">
                  Search
                </button>
              </p>
            </div>
          </form>
  }
}  

export default Datepicker