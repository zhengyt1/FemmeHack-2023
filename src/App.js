import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/detail" element={<Detail></Detail>}>
        <Route path=":id" element={<div />}></Route>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
