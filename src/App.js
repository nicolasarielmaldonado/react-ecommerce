import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useFetchItems } from './hooks/useFetchItems';
import { useSearchItems } from './hooks/useSearchItems';

import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending';
import { Categories } from './components/Categories/Categories';
import { CardList } from './components/CardList/CardList';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Footer } from './components/Footer/Footer';
import { EmptyFavorites } from './components/EmptyFavorites/EmptyFavorites';
import { Modal } from './components/Modal/Modal';

export const ItemsContext = createContext();
export const FavoriteContext = createContext();
export const ItemCartContext = createContext();

export function App() {

  const dataFull = useFetchItems();

  const localStorageKeyFav = "favorite_items";
  const localStorageKeyCart = "cart";

  const [favorites, setFavorites] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  const [inputText, setInputText] = useState();
  const [toggleCart, setToggleCart] = useState(false);

  const funcToggleCart = () => {
    if(itemsCart.length > 0){
      setToggleCart(!toggleCart);
    }
  }

  const handleSetInputText = (e) => {
    setInputText(e);
  }

  const updateFavoriteItems = ( id ) => {
    const updated = [ ...favorites ];
    const isFavorite = updated.indexOf( id );
    if( isFavorite >= 0 ){
      updated.splice( isFavorite, 1 );
    } else {
      updated.push( id );
    }
    setFavorites( updated );
    window.localStorage.setItem( localStorageKeyFav, JSON.stringify( updated ) );
  }

  const updateCartItems = ({id, title, price}) => {
    const updated = [...itemsCart];
    let isInCart = -1;
    updated.forEach((item, i) => {
      if (item.id === id){
        isInCart = i;
      }
    });
    if(isInCart >= 0){
      updated[isInCart].quantity = updated[isInCart].quantity +1;
    } else {
      updated.push({
        id,
        title,
        price,
        quantity: 1
      });
    }
    setItemsCart(updated);
    window.localStorage.setItem(localStorageKeyCart, JSON.stringify(updated));
  }

  const handleRemove = ( id ) => {
    const updated = [ ...itemsCart ];
    let isInCart = -1;
    updated.forEach((item, i) => {
      if (item.id === id){
        isInCart = i;
      }
    });

    if(isInCart >= 0 && updated[isInCart].quantity > 0){
      updated[isInCart].quantity = updated[isInCart].quantity -1;
      if(updated[isInCart].quantity === 0){
          updated.splice(isInCart, 1);
      }
    }
      
    if (updated.length === 0) {
        setToggleCart( false );
      }

      setItemsCart( updated );
      window.localStorage.setItem(localStorageKeyCart, JSON.stringify(updated));
  }

  const handleBuyAll = () => {
    setItemsCart([]);
    window.localStorage.setItem(localStorageKeyCart, JSON.stringify([]));
    funcToggleCart();
}

  const searchData = useSearchItems(inputText, dataFull);

  const loadFavorites = () => {

    const favoriteItems = JSON.parse(window.localStorage.getItem(localStorageKeyFav)) || [];
    const CartItems = JSON.parse(window.localStorage.getItem(localStorageKeyCart)) || [];

    setItemsCart(CartItems);
    setFavorites(favoriteItems);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <>
      <Router>
        <ItemsContext.Provider value={ dataFull }>
          <FavoriteContext.Provider value={{
            favoriteItems: favorites,
            updateFavoriteItems: updateFavoriteItems
          }
          }>
            <ItemCartContext.Provider value={{
              itemsCart: itemsCart,
              updateCartItems: updateCartItems,
              handleRemove: handleRemove,
              handleBuyAll: handleBuyAll
            }}>
              <Header handleSetInputText={ handleSetInputText } favorites={favorites} itemsCart={itemsCart} funcToggleCart={funcToggleCart} />
              
                {
                  (toggleCart && (itemsCart.length >= 1)) ? <Modal itemsCart={itemsCart} setItemsCart={setItemsCart} funcToggleCart={funcToggleCart}/> : null
                }

                <div className="div-main">
                  <Trending/>     

                  <Switch>
                    <Route exact path="/">
                        <Categories show={"show"}/>
                        <CardList />
                    </Route>

                    <Route exact path="/mensclothing">
                        <Categories show={"show"}/>
                        <CardList category={"men's clothing"}/>
                    </Route>

                    <Route exact path="/womensclothing">
                        <Categories show={"show"}/>
                        <CardList category={"women's clothing"}/>
                    </Route>

                    <Route exact path="/jewelry">
                        <Categories show={"show"}/>
                        <CardList category={"jewelery"}/>
                    </Route>

                    <Route exact path="/electronics">
                        <Categories show={"show"}/>
                        <CardList category={"electronics"}/>
                    </Route>

                  <Route exact path={`/favorites`}>
                  {
                    (favorites.length === 0)? 
                      <>
                        <Categories show={"show"}/>
                        <EmptyFavorites/>
                      </>
                      :
                      <>
                        <Categories show={"show"}/>
                        <CardList category={"favorites"} />
                      </>
                  }
                  </Route>

                  <Route exact path={`/search/${inputText}`}>
                      <Categories show={"show"}/>
                      {( searchData.length===0 ) ? <ErrorPage />
                      :
                      <CardList searchData={searchData} />
                      }
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </div>

              <Footer />
            </ItemCartContext.Provider>
          </FavoriteContext.Provider>
        </ItemsContext.Provider>

      </Router>
    </>
  );
}