import React, { useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateBoard = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)])
  );
};

const BoggleGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [board, setBoard] = useState(generateBoard(gridSize));
  const [guessedWords, setGuessedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");

    // Function to check if a word exists using an API
  const isValidWord = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      return response.ok; // If the response is okay, the word is valid
    } catch (error) {
      console.error("Error checking word:", error);
      return false;
    }
  };

  // Function to calculate points based on word length
  const getPoints = (length) => {
    if (length === 3) return 1;
    if (length === 4) return 3;
    if (length === 5) return 5;
    if (length === 6) return 7;
    if (length === 7) return 8;
    if (length === 8) return 10;
    if (length === 9) return 12;
    if (length >= 10) return 15;
    return 0;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const word = input.trim().toLowerCase();

    if (!word) {
      alert("Please enter a word.");
      return;
    }

    if (guessedWords.includes(word)) {
      alert("You've already guessed that word!");
      return;
    }

    const isWordValid = await isValidWord(word);
    if (!isWordValid) {
      alert("Invalid word. Try again!");
      return;
    }

    // Update state with new word and score
    setGuessedWords([...guessedWords, word]);
    setScore(score + getPoints(word.length));
    setInput("");

  };

  return (
    <div>
      <h1>Boggle Game</h1>
      <label>
        Game-Grid Size:
        <select onChange={(e) => {
          const newSize = parseInt(e.target.value);
          setGridSize(newSize);
          setBoard(generateBoard(newSize));
          setGuessedWords([]);
          setScore(0);
        }}>
          <option value={3}>3x3</option>
          <option value={4} selected>4x4</option>
          <option value={5}>5x5</option>
        </select>
      </label>
      <div style={{ 
            display: "grid", 
            gridTemplateColumns: `repeat(${gridSize}, 50px)`,
            justifyContent: "center",
            margin: "40px" 
            }}>
        {board.flat().map((letter, i) => (
          <div key={i} style={{ 
                width: 50, height: 50, border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" 
                }}>
            {letter}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter word"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Score: {score}</h2>
      <h3>Guessed Words:</h3>
      <ul>
        {guessedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoggleGame;
