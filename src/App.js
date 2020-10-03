import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
import Blind from './pages/Blind';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Favorite from './pages/Favorite';
import Product from './pages/Product/Product';
import './utils/util-classes.css';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/favorite" component={Favorite}/>
        <Route path='/about' component={About}/>
        <Route path='/blind' component={Blind}/>
        <Route path='/category/:categoryName' component={Category}/>
        <Route path="/product/:productId" component={Product} />

        <Route path='*' component={Page404}/>
      </Switch>
    </div>
  );
}


export default App;
