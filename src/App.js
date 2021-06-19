import { createContext } from 'react';
import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending';
import { Categories } from './components/Categories/Categories';
import { CardList } from './components/CardList/CardList';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useFetchItems } from './hooks/useFetchItems';

export const ItemsContext = createContext();

export function App() {

  const dataFull = useFetchItems();

  return (
    <>
    <Router>
    
      <ItemsContext.Provider value={ dataFull }>

        <Header />
        
        <Trending/>     

        <Switch>
          <Route exact path="/">
            <div className="main-body">
              <Categories/>
              <CardList />
            </div>
          </Route>

          <Route exact path="/mensclothing">
            <div className="main-body">
              <Categories/>
              <CardList category={"men's clothing"}/>
            </div>
          </Route>

          <Route exact path="/womensclothing">
            <div className="main-body">
              <Categories/>
              <CardList category={"women's clothing"}/>
            </div>
          </Route>

          <Route exact path="/jewelry">
            <div className="main-body">
              <Categories/>
              <CardList category={"jewelery"}/>
            </div>
          </Route>

          <Route exact path="/electronics">
            <div className="main-body">
              <Categories/>
              <CardList category={"electronics"}/>
            </div>
          </Route>
        
          <Redirect to="/" />

        </Switch>

      </ItemsContext.Provider>

    </Router>
    </>
  );
}