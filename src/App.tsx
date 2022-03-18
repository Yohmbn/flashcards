import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardList from './components/flashcardlist';
import FlashcardListV2 from './components/flashcardlistV2';
import FlashcardInputList from './components/FlashcardInputList';



// const SAMPLE_CARDS = [
//   {
//     id : 1,
//     question: 'What is 3 + 3 ?',
//     answer : '6',
//     options: ['2','3','5','6'],

//   },
//   {
//     id : 2,
//     question: 'What is 4 + 4',
//     answer : '8',
//     options: ['2','3','5','8'],

//   },
//   {
//     id : 3,
//     question: 'What is 5 + 5',
//     answer : '10',
//     options: ['2','3','5','10'],

//   }

// ]

const SIMPLE_CARDS = [
  {
    id : 1,
    question: 'What is 3 + 3 ?',
    answer : '6',


  },
  {
    id : 2,
    question: 'What is 4 + 4',
    answer : '8',


  },
  {
    id : 3,
    question: 'What is 5 + 5',
    answer : '10',


  }

]





function App() {
  const [cards,setCards] = useState(SIMPLE_CARDS)
  //const [cards,setCards] = useState(SAMPLE_CARDS)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>

<h1><FlashcardInputList flashcards = {cards}/> </h1>
      </body>
    </div>
  );
}

export default App;
