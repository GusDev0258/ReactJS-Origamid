import React from "react";
import {ContextStorage} from './GlobalContext';
import Super from "./Super";


const App = () =>{
  return (
    <ContextStorage>
      <Super />
    </ContextStorage>
  )
}

export default App;
