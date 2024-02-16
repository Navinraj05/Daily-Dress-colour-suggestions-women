
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorList from './components/ColorList';
import ColorDetail from './components/ColorDetail';
import ColorForm from './components/ColorForm';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import  Home  from './components/Home';


function App() {
  return (
     //ColorList
    <div>
    <h1> HI </h1>
    <h1> good morning</h1>
     <Router>
     <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/colors/new" component={ColorForm} />
          <Route path="/colors/:id" component={ColorDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
