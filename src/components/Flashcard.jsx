import React, { useState } from 'react'


 const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  //<div className="flashcard-option">{option}</div>

     return (
         <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
             <div className="front">
                 {flashcard.question}
                 <div className="flashcard-options">
                    <form onSubmit={handleSubmit}>
                     {flashcard.options.map(option => {
                         return <div><input type="radio" name="colors" value={option} /> {option}</div>
                     })}
                     <button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                      Check Answer
                      </button>
                     </form>
                 </div>
             </div>
             <div className="back">The correct answer is <p>{flashcard.answer}</p></div>
         </div>
     )
 }

 export default Flashcard
