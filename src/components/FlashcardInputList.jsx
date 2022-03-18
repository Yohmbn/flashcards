import React from 'react'
 import FlashcardInput from './FlashcardInput'

 const FlashcardInputList = ({ flashcards }) => {
     console.log(flashcards)
     return (
         <div className="card-grid">
             {flashcards.map(flashcard => {
                 return <FlashcardInput flashcard={flashcard} key={flashcard.id} />
             })}
         </div>
     )
 }

 export default FlashcardInputList
