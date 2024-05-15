import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessdLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return <div className=""></div>;
}

export default App;
