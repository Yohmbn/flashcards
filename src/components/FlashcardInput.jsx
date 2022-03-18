import React, { useState } from 'react'


 const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    console.log(`
      Answer: ${answer}
    `);

    event.preventDefault();
  }

  const requiredValidator = (value) => {
    return value ? "" : "This field is required";
  }



  //<div className="flashcard-option">{option}</div>

     return (
         <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
             <div className="front">

                 <form onSubmit={handleSubmit}><h1>{flashcard.question}</h1>

              <label>
                  Answer:
                  <input
                    name="Answer"
                    type="Answer"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    required />
                </label>




                     <button  type="submit" variant="outlined">
                      Check Answer
              </button>
              </form>


             </div>
             <div className="back">{flashcard.answer}</div>
         </div>
     )
 }

 export default Flashcard
