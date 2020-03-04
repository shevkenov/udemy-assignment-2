import React, { useState } from 'react';

import Validation from './components/Validation';
import CharComponents from './components/CharComponent';
import './App.css';

function App() {

  const [text, setTextState] = useState('');
  const textLenght = text.length;
  
  const removeChar = (i) => {
    const textArr = text.split('');
    textArr.splice(i,1);
    setTextState(textArr.join(''))
  }
  
  const allChars = text
    .split("")
    .map((c, i) => (
      <CharComponents char={c} key={i} onclick={() => removeChar(i)} />
    ));


  return (
    <div className="App">
      <h3>Count the lenght of input</h3>
      <input type='text' value={text} onChange={e => setTextState(e.target.value)} />
      <p>{textLenght}</p>
      <Validation lenght={textLenght}/>
      {allChars}
    </div>
  );
}

export default App;
