import React from 'react';
import {useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import './App.css';

import HomePage from './routes/Home';
import GamePage from  './routes/Game';
import MenuHeader from './components/Header/MenuHeader';
import About from './routes/About';
import NotFound from './routes/NotFound';
import ContactPage from './routes/Contact';
import Footer from './components/Footer';

import s from './style.module.css'

function App() {

  const match = useRouteMatch('/');
  console.log('#### match', match);

  return (     
      <Switch> 
        <Route path="/404" component= {NotFound}/>
        <Route>
          <>
              <MenuHeader bgActive={!match.isExact}/>
              <div className={cn(s.wrap, {
                [s.isHomePage]: match.isExact
              })}>
                <Switch>
                    <Route path = "/" exact component ={HomePage} />
                    <Route path = "/home" component = {HomePage} />
                    <Route path ="/game" component = {GamePage} />
                    <Route path ="/about" component = {About} />
                    <Route path ="/contact" component = {ContactPage} />
                    <Route render={() => (<Redirect to ="/404" />) }/>
                </Switch>
              </div>
              
              <Footer title='Thanks for vsiting' desc='Pokemons-Game' />
          </>
        </Route>
        


     </Switch>
    
  )

  
  
}

export default App;
