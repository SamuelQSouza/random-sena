import React, {useState, useEffect} from 'react';
import './App.css'

function App() {
  const [sena, setSena] = useState([])   

  useEffect(() => {
    let aux=[]    
    while(1){
      if(aux.length>=6){break}
      let random = getRandomInt()
      if(!aux.find(e => e == random)){aux.push(random)}
    }
    setSena([...aux])
  }, [])

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(61-1)+1 );

  } 
 

  return (
    <div className="App">
      <div className="App-container">
        <h1>Mega-Sena Generator</h1>
        <div>
          {sena.map((numero) => (
            <h2 key={numero}>{numero}</h2>) 
          )}
        </div>
        <a href="/">atualizar</a>
      </div>     
    </div>
  );
}

export default App;
