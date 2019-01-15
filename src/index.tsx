import React, { Component, createElement } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import RatingQuestion from './RatingQuestion'
import AddRatingQuestion from './AddRatingQuestion'

import { ratingQuestions } from './db.json'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      ratingQuestions: [],
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/ratingquestions"
    axios.get(url)
      .then(res => {
        const questions = res.data
        this.setState({ ratingQuestions })
    })
  }
  
  

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} />
        <RatingQuestion title="This is my rating TEST" name="rating"/>
        <RatingQuestion title="Poker is fun" name="poker" />

      {this.renderRatingQuestions()}

        <p>
          Start making some changes
        </p> */}

        {/* {this.state.ratingQuestions.map(question => <h3>{question.title}</h3> )} */}

        {this.renderRatingQuestions()}

        <AddRatingQuestion />
      </div>
    );
  }

  renderRatingQuestions() {
    return this.state.ratingQuestions.map((optionSelected) => <RatingQuestion {...optionSelected} />)
  }
}


render(<App ratingQuestions={ratingQuestions} />, document.getElementById('root'));
