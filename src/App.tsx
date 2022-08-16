import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { AppRoute } from './Routes/routes';
import { Main } from './components/main/main';
import { Workout } from './components/workout/workout';

function App() {
  return (
    <Routes>
      {AppRoute.map((route, index) => {
                        return <Route key = {index} path = {route.path} element={<route.Element />}/>
                        })}
    </Routes>
  );
}

export default App;
