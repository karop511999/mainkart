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
class Fkart extends Flipkart
{
  constructor(item,name)
  {
    super(name);
    this.item=item;
  }
  banner()
  {
    let print=super.getFlipkart();
    print+=" your order item is "+this.item;
    return print;
  }
}
function App() {
  const f1=new Fkart("headphone","karop");
  const f2=new Fkart("tv","karop")
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
      <button onClick={click}>Toggle</button>
      <div className="content">
        {displayContent}
      </div>
      {f1.banner()}
      <div>
      {f2.banner()}
      </div>
    
    </div>
  );
}

export default App;
