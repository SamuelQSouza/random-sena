import React, {useState, useEffect} from 'react';

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
    <div className="App"
    style={
      {display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ccc",
      width: "100vw",
      flexDirection: "column",
      height: "100vh"}
    }
    >
      <div
      style={{
        display:"flex",
        flexDirection: "row"}}
      >
      {sena.map((numero) => (
        <h2 key={numero.toString()}
          style={
            {marginRight: "8px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color: "rgb(43, 70, 226)",
            background: '#fff',
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "1px 1px 2px #777"
            
            
          }
          }     
        
        >{numero}</h2>))}
      </div>

      <a href="/">atualizar</a>
      
    </div>
  );
}

export default App;
