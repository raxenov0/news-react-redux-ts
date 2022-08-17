import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AppRoute } from './Routes/routes';


function App() {
  return (
    <Routes>
      {AppRoute.map((route, index) => {
        return <Route key={index} path={route.path} element={<route.Element />} />
      })}
    </Routes>
  );
}

export default App;
