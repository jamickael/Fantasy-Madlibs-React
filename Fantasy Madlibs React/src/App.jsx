import './App.css'
import Home from './pages/home'
import FourthWing from './pages/fourthwing'
import Acotar from './pages/acotar'
import Lotr from './pages/lotr'
import HarryPotter from './pages/harrypotter'
import Ledge from './pages/ledge'
import Eragon from './pages/eragon'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Insert navbar here */}
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/fourthwing" element={<FourthWing/>}></Route>
          <Route exact path="/acotar" element={<Acotar/>}></Route>
          <Route exact path="/lordoftherings" element={<Lotr/>}></Route>
          <Route exact path="/harrypotter" element={<HarryPotter/>}></Route>
          <Route exact path="/ledge" element={<Ledge/>}></Route>
          <Route exact path="/eragon" element={<Eragon/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App