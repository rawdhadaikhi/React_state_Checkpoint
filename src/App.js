
import './App.css';


import React from 'react';
import ToggleProfil from "./Profil";  
import ShowProfil from "./Toggle";  

function App() {
  return (
    <div className="App">
    
      <div className="App">  
      <ToggleProfil title="Show Child">  
                <ShowProfil/>
            </ToggleProfil>  
              
     
    </div>  
 
    </div>
  );
}


export default App;
