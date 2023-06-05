
import './App.css';
import {useState} from "react";
import {DropdownComponent} from "./components/dropdown-component";

function App() {
    const [active, setActive] = useState('dropdown-wrapper')
    const handleActive = (active) => {
        active === 'dropdown-wrapper'
            ? setActive('dropdown-wrapper open')
            : setActive('dropdown-wrapper')
    }
  return (
      <DropdownComponent handleActive={handleActive}
                         active={active}/>
  );
}

export default App;
