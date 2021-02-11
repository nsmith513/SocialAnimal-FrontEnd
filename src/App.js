import logo from './logo.svg';
import './App.css';
import { SplashPage } from "./component/SplashPage";
import {PetNav} from "./component/PetNav";

function App() {
  return (
    <div className="App">
        <PetNav />
        <div style={{marginBottom: "10px"}}>
            <SplashPage />
        </div>
    </div>
  );
}

export default App;
