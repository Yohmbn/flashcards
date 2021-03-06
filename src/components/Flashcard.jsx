import React, { useState } from 'react'


 const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)




  //<div className="flashcard-option">{option}</div>

     return (
         <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
             <div className="front">
                 {flashcard.question}
                 <div className="flashcard-options">

                     {flashcard.options.map(option => {
                         return <div className="flashcard-option">{option}</div>
                     })}
                     <button  type="submit" variant="outlined">
                      Check Answer
              </button>

                 </div>
             </div>
             <div className="back">{flashcard.answer}</div>
         </div>
     )
 }

 export default Flashcard
