import './App.css';
import {useState,useEffect} from 'react';
import Button from './components/Button';
import Card from "./components/Card"
import Sidebar from './components/Sidebar';

function App() {

  const storedCards = JSON.parse(localStorage.getItem("cards"));    
  const [cards,setCards] = useState(storedCards || []);
  
  useEffect(()=>{
    localStorage.setItem("cards",JSON.stringify(cards));
  },[cards])


 const addCard = () => {
  const newCard = {
    id:Date.now().toString(),
    number:Math.floor(Math.random()*1000)
  };
  setCards([...cards,newCard]);
 };

 const sortCards = () => {
    const sortedCards = cards.sort((a,b) => a.number-b.number);
    setCards([...sortedCards]);
 }

 const deleteCard = (cardID) => {
  setCards(cards.filter((card)=>card.id !== cardID))
 }
  return (
    <div className="App">
       <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <header>
           <Button
              btnText="Add Card" 
              onClick={addCard}  
            />
           <Button 
              disabled={cards.length < 2}
              btnText="Sort Cards" 
              onClick={sortCards}
            />
          </header>
          <div className="content">
            {cards.map((card)=> <Card key={card.id} card={card} deleteCard={deleteCard} />)}
          </div>
          <footer>
              <p>footer</p>
          </footer>
       </div>
       <div className="sidebar">
        <Sidebar />
       </div>
    </div>
  );
}

export default App;
