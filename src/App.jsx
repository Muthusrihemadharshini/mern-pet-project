import { Pet } from './PetLogic';
import { useState } from 'react'
import './App.css'
import neutral from './assets/neutral.png';
import happy from './assets/happy.png';
import sad from './assets/sad.png';
import crying from './assets/crying.png';


function App() {
  const [myPet, setMyPet] = useState(new Pet("Fluffy"));

  const [gameState, setGameState] = useState("welcome");


const getPetImage = () => {
  
  if (myPet.hunger >= 85 || myPet.happiness < 20) { 
    return crying; 
  }

  
  if (myPet.hunger >= 70 || myPet.happiness < 40) { 
    return sad; 
  }

  
  if (myPet.hunger >= 40 || myPet.happiness < 70) { 
    return neutral; 
  }

  
  return happy; 
};


const handleFeed = () => {
    myPet.feed();
    const updatedPet = Object.assign(new Pet(myPet.name), myPet);
    setMyPet(updatedPet); 

};

  const handlePlay = () => {
    myPet.play();
    const updatedPet = Object.assign(new Pet(myPet.name), myPet);
    setMyPet(updatedPet);
  };



const handleReset = () => {
  if (window.confirm("Are you sure you want to reset your pet?")){
    setMyPet(new Pet("Fluffy"));
  }
};

  return (
 <div className="container">
    {/* --- WELCOME SCREEN --- */}
    {gameState === "welcome" && (
      <div className="welcome-card">
        <h1>🐾 Digital Pet Palace</h1>
        <img src={happy} alt="Welcome Pet" className="welcome-img" />
        <p>Welcome! Are you ready to take care of your new best friend?</p>
        <div className="button-group-vertical">
          <button className="action-btn" onClick={() => setGameState("play")}>🎮 Start Play</button>
          <button className="action-btn" onClick={() => setGameState("rules")}>📜 Read Rules</button>
        </div>
      </div>
    )}

    {/* --- RULES SCREEN --- */}
    {gameState === "rules" && (
      <div className="rules-card">
        <h2>Game Rules</h2>
        <ul className="rules-list">
          <li>Keep Hunger below 80% or the pet gets cranky!</li>
          <li>If Happiness drops below 20%, your pet will cry.</li>
          <li>Feeding reduces hunger by 15.</li>
          <li>Playing increases happiness by 20.</li>
        </ul>
        <button className="action-btn" onClick={() => setGameState("welcome")}>🔙 Back</button>
      </div>
    )}


    {gameState === "play" && (
      <div className="pet-card">
        <img src={getPetImage()} alt="Pet Mood" className="pet-mood-img" />
        <h1>{myPet.name}</h1>
        

        
<p className = "status-text">Mood: <strong>{myPet.getStatus()}</strong></p>

<div className  = "stats-container">
<div className = "stat-row">
<span>Hunger:{myPet.hunger}%</span>
<div className = "progress-bg">
<div className = "progress-fill hunger" style={{ width: `${myPet.hunger}%` }}></div>
            </div>
          </div>

<div className = "stat-row">
<span>Happiness:{myPet.happiness}%</span>
<div className = "progress-bg">
<div className = "progress-fill happiness" style={{ width: `${myPet.happiness}%` }}></div>
            </div>
          </div>
</div>

<div className = "button-group">
<button className = "action-btn" onClick ={handleFeed}>🥗 Feed</button>
<button className = "action-btn" onClick ={handlePlay}>🎾 Play</button>

</div>

<button className = "reset-btn" onClick ={handleReset}>
🔄 Start Over
</button>
<button className="reset-btn" onClick={() => setGameState("welcome")}>🏠 Exit to Menu</button>
        </div>
      )}
    </div>
  );
}

export default App;
