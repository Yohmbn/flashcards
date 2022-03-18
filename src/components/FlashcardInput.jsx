import React, { useState } from 'react'


const FlashcardInput = ({flashcard}) => {
constructor(props) {
  super(props);
  this.state = {value: };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

const handleChange = (event) => {
  this.setState({value: event.target.value});
}

const handleSubmit = (event) => {
  alert('la reponse est ' + this.state.value);
  event.preventDefault();
}


  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        choissisez la bonne réponse :
        <select value={this.state.value} onChange={this.handleChange}>
        {flashcard.options.map(option => {
          return <div><option value={option}>{option}</option></div>
         })}

        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

