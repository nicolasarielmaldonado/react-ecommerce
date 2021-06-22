import { createContext, useState } from 'react';
import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending';
import { Categories } from './components/Categories/Categories';
import { CardList } from './components/CardList/CardList';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useFetchItems } from './hooks/useFetchItems';
import { useSearchItems } from './hooks/useSearchItems';

export const ItemsContext = createContext();

export function App() {

  const dataFull = useFetchItems();

  const [inputText, setInputText] = useState();

  const handleSetInputText = (e) => {
    setInputText(e)
  }

  const searchData = useSearchItems(inputText, dataFull);

  return (
    <>
    <Router>
    
      <ItemsContext.Provider value={ dataFull }>

        <Header handleSetInputText={ handleSetInputText } />
        
        <Trending/>     

        <Switch>
          <Route exact path="/">
            <div className="main-body">
              <Categories show={"show"}/>
              <CardList />
            </div>
          </Route>

          <Route exact path="/mensclothing">
            <div className="main-body">
              <Categories show={"show"}/>
              <CardList category={"men's clothing"}/>
            </div>
          </Route>

          <Route exact path="/womensclothing">
            <div className="main-body">
              <Categories show={"show"}/>
              <CardList category={"women's clothing"}/>
            </div>
          </Route>

          <Route exact path="/jewelry">
            <div className="main-body">
              <Categories show={"show"}/>
              <CardList category={"jewelery"}/>
            </div>
          </Route>

          <Route exact path="/electronics">
            <div className="main-body">
              <Categories show={"show"}/>
              <CardList category={"electronics"}/>
            </div>
          </Route>

          <Route exact path={`/search/${inputText}`}>
            <div className="main-body">
              <Categories show={"show"}/>
              {( searchData.length===0 ) ? <ErrorPage />
              :
              <CardList searchData={searchData} />
              }
            </div>
          </Route>
        
          <Redirect to="/" />

        </Switch>

      </ItemsContext.Provider>

    </Router>
    </>
  );
}