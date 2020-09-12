import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
