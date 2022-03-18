import React, { useState } from 'react'


 const FlashcardV2 = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < flashcard.SAMPLE_CARDS.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};




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

 export default FlashcardV2
