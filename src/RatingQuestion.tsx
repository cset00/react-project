import React, { Component } from 'react'
import axios from 'axios';

class RatingOption extends Component {
  optionSelected = (event) => {
    this.props.optionSelected(event.target.value)
  }
  
  render() {
    return (
      <div>
        <input type="radio" name={this.props.name} value={this.props.value} id={this.props.id} onChange={this.optionSelected}/>{this.props.value} 
      </div>
    )
  }
}



class RatingQuestion extends Component {
  state = {
    selectedOption: "Nothing selected",
  }
  
  optionSelected = (option) => {
    this.setState({
      selectedOption: option
    })
  }

  // deleteQuestion = (event) => {
  //   event.preventDefault()

  //   let url = "http://localhost:3001/ratingquestions/"
  //   let id = this.props.id
  //   axios.delete(url + id)
  //     .then(res => {
  //       // console.log('deleted')
  //       // console.log(res)
  //       // console.log(res.data)
  //       movies: previousState.movies.filter(m => m.id !== movie.id)
  //     })
  // }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <p>Selected option: {this.state.selectedOption}</p>

        {this.renderRatingOptions()}
        
        <form action={this.deleteQuestion}>
          
          <button type="submit">Delete</button>
        </form>
      </div>

    )
  }

  renderRatingOptions() {
    let values = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]

    return values.map((value) => <RatingOption value={value} optionSelected={this.optionSelected} name={this.props.name}/>
    )}
}

export default RatingQuestion