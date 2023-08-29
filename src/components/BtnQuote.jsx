import React, { useState } from 'react';
import getRandomElemArray from '../utils/getRamdomElementArray';

const BtnQuote = ({ setQuote, phrases, setnumberBg }) => {
  const [usedPhrases, setUsedPhrases] = useState([]);

  const handleRandomPhrase = () => {
    const availablePhrases = phrases.slice();
    let randomPhrase = null;

    for (let i = 0; i < availablePhrases.length; i++) {
      const phrase = availablePhrases[i];
      if (!usedPhrases.includes(phrase)) {
        randomPhrase = phrase;
        break;
      }
    }

    if (randomPhrase !== null) {
      setUsedPhrases([...usedPhrases, randomPhrase]);
      setQuote(randomPhrase);
      setnumberBg(getRandomElemArray([1, 2, 3, 4, 5, 6, 7]));
    }
  };

  // Llama a la función handleRandomPhrase inicialmente al cargar el componente
  useState(handleRandomPhrase);

  return (
    <button className="container_Btn" onClick={handleRandomPhrase}>
      otra gallleta 🥠
    </button>
  );
};

export default BtnQuote;
