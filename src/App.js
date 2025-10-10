import { useEffect, useRef, useState } from 'react';
import './App.css';
import BasicGrid from './Components/Grid';

function App() {

  const initialCards = [52, 52, 52];

  const [playerCard, setPlayerCard] = useState(initialCards);
  const [computerCard, setComputerCard] = useState(initialCards);
  const [PlayerTotalScore, setPlayerTotalScore] = useState(0);
  const [computerTotalScore, setComputerTotalScore] = useState(0);

  const generateCards = (player) => {
    for (let i = 0; i < 3; i++) {
      const randomCard = Math.floor(Math.random() * 51);
      if (player)
        setPlayerCard(prev => [...prev, randomCard]);
      else setComputerCard(prev => [...prev, randomCard]);
    }
  }

  const handleOnclick = () => {
    setPlayerCard([]);
    generateCards(true);
    setComputerCard([]);
    generateCards(false);
  }

  useEffect(() => {

    let playerScore = 0;
    let computerScore = 0;

    {playerCard.map((index, _) => {
      console.log(parseInt(index / 4) + 1);
      playerScore += parseInt(index / 4) + 1;
    })}

    {computerCard.map((index, _) => {
      console.log(parseInt(index / 4) + 1);
      computerScore += parseInt(index / 4) + 1;
    })}

    if (playerScore > computerScore) {
      setPlayerTotalScore(prev => prev + 1);
    }

    if (playerScore < computerScore) {
      setComputerTotalScore(prev => prev + 1);
    }

    console.log(playerScore + " - " + computerScore);

  }, [playerCard, computerCard])

  return (
    <div className="App">
      <h1>Three Cards</h1>
      
      <BasicGrid 
        playerCards={playerCard} 
        playerScore={PlayerTotalScore} 
        computerCards={computerCard} 
        computerScore={computerTotalScore}/>

      <button onClick={handleOnclick}>DRAFT CARDS</button>
    </div>
  );
}

export default App;
