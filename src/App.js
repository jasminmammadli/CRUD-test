import './App.css';
import MainData from './MainData';
import {Routes,Route} from "react-router-dom"
import PostDetail from './PostDetail';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainData/>}/>
        <Route path='/post/:id' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
