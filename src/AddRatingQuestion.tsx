import React, { Component } from 'react'
import axios from 'axios';

 

class AddRatingQuestion extends Component {
  state = {
    title: '',
    tag: '',
  }

  handleChange = (event: React.FormEvent) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    const { title, tag } = this.state
    
    event.preventDefault()
    alert(`Your question titled: ${title} & and tag: ${tag} have been added`)

    let url = "http://localhost:3001/ratingquestions"
    axios.post(url, { title, tag })
      .then((result) => {
        console.log(result)
      })
  }

  render() {
    const { title, tag } = this.state
    return (
      <div>
        <h1>Test add Question</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={title} onChange={this.handleChange}/>
          </label>
          <label>
            Tag:
            <input type="text" name="tag" value={tag} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
          


          {/* <label>Tag:</label>
          <input type="text" name={tag} value={tag} onChange={this.onChange}/> */}
          
        
        </form>
      </div>
      
    )
  }
}

export default AddRatingQuestion