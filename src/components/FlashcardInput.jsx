import React, { useState } from 'react'

constructor(props) {
  super(props);
  this.state = {value: };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('la reponse est ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        choissisez la bonne réponse :
        <select value={this.state.value} onChange={this.handleChange}>
        {flashcard.options.map(option => {
                         return <div><input type="radio" name="colors" value={option} /> {option}</div>
                     })}

        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
