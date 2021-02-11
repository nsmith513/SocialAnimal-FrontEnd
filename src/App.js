import logo from './logo.svg';
import './App.css';
import { SplashPage } from "./component/SplashPage";
import {PetNav} from "./component/PetNav";

function App() {
  return (
    <div className="App">
        <PetNav />
        <SplashPage />
    </div>
  );
}

export default App;
