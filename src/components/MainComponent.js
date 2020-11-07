import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import {DISHES} from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dishes:DISHES
          };
          console.log(this.state.dishes)
      }

      render()
      {
        const HomePage = () => {
          return(
              <Home 
              />
          );
        }

        return(
          <div>
            <Header />
            <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
            <Redirect to component={HomePage} />
           </Switch>
           <Footer />
          </div>
        );

      }
     
    }
export default Main;
