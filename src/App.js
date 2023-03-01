import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/detail" element={<Outlet />}>
        <Route path=":id" element={<Detail />}></Route>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
