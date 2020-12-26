import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

class Flipkart
{
  constructor(name)
  {
    this.name=name;
  }
  getFlipkart()
  {
    return "my name is:"+this.name;
  }
}
function App() {
  const fname=new Flipkart("karop");
  const [Toggle,A]=useState(true);
  const click=()=>{
   const presentState=Toggle;
   A(!presentState)
  }
  let displayContent="Open";
  if(Toggle){
    displayContent="closed";
  }
  return (
   <div>
     <button onClick={click}>click</button>
     <div className="content">
       {displayContent}
      
     </div>
     {fname.getFlipkart()}
   </div>
  );
}

export default App;
