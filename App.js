

import './App.css';
import Select from './My_comp/Seclect';
import Child from './My_comp/Child';




function App() {
 let arr=["child","prent"];
 
  return (
  <div>
    <Child arr={arr}/>
    <Select/>
  </div>
  );
}

export default App;
