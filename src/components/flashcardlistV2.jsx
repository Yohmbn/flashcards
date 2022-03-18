import React from 'react'
 import FlashcardV2 from './FlashcardV2'

 const FlashcardListV2 = ({ flashcards }) => {
     console.log(flashcards)
     return (
         <div className="card-grid">
             {flashcards.map(flashcard => {
                 return <FlashcardV2 flashcard={flashcard} key={flashcard.id} />
             })}
         </div>
     )
 }

 export default FlashcardListV2
