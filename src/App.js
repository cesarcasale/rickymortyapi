import './App.scss';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import AboutPage from "./pages/about/AboutPage"
import Menu from "./components/menu/Menu";
import ChangeTheme from "./components/ChangeTheme/ChangeTheme";
import { useState } from "react";
import { AppContext } from "./shared/AppContext";

function App() {
  const [search, setSearch] = useState("")
  return (
    <Router>
    <AppContext.Provider value={{ search, setSearch}}>

    <div className="App">
    <div className="container">

      <header className="App-header">
        <div className='menu-theme'>
        <ChangeTheme/>
        <Menu/>
        </div>
        <div className='r-path'>
        <Routes>
            <Route path="/characters" element={<CharactersPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        </div>
      </header>
      </div>
    </div>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
