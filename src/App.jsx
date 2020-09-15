import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Movies from './pages/Category/Movies';
import LandingSkeleton from './components/Skeleton/LandingSkeleton';

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LandingSkeleton />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:name" exact component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
