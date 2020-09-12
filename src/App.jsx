import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
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
