import React from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { UserList } from './components/userList';

function App() {
  return (
    <div className="App">
      <UserList/>
      <hr />
      <TodoList/>
    </div>
  );
}

export default App;
