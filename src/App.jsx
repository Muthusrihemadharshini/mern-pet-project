import { Pet } from './PetLogic';
import { useState } from 'react'
import './App.css'
import neutral from './assets/neutral.png';
import happy from './assets/happy.png';
import sad from './assets/sad.png';
import crying from './assets/crying.png';


function App() {
  const [myPet, setMyPet] = useState(new Pet("Fluffy"));


const getPetImage = () => {
  // 1. URGENT: If the pet is starving or miserable, show Crying first!
  if (myPet.hunger >= 85 || myPet.happiness < 20) { 
    return crying; 
  }

  // 2. BAD: If the pet is quite hungry or sad, show Sad.
  if (myPet.hunger >= 70 || myPet.happiness < 40) { 
    return sad; 
  }

  // 3. OKAY: If hunger is in the middle, show Neutral.
  if (myPet.hunger >= 40 || myPet.happiness < 70) { 
    return neutral; 
  }

  // 4. GREAT: Only show Happy if BOTH hunger is low AND happiness is high!
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
      <div className="pet-card">
        <img src = {getPetImage()} alt = "Pet Mood" className = "pet-mood-img"/>
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
<div className = "progress-fill happiness" style={{ width: `${myPet.happiness}%` }}></div>
            </div>
          </div>


<div className = "button-group">
<button className = "action-btn" onClick ={handleFeed}>🥗 Feed</button>
<button className = "action-btn" onClick ={handlePlay}>🎾 Play</button>

</div>

<button className = "reset-btn" onClick ={handleReset}>
🔄 Start Over
</button>
</div>
</div>
);

}

export default App;
