import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {Content} from './pages/Content'


function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/content" element={<Content/>}/>
  </Routes>
}

export default App;
