import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import { Dishes } from "../shared/dishes";
import { Comments } from "../shared/comments";
import { Leaders } from "../shared/leaders";
import { Promotions } from "../shared/promotions";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import DishDetail from "./DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    };
    console.log(this.state);
  }

  render() {
    //filter returns an array
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((dish) => dish.featured)[0]}
          leader={this.state.leaders.filter((dish) => dish.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      console.log("MAATCH IS ");
      console.log(match.params.dishId);
      console.log(
        this.state.dishes.filter(
          (dish) => dish.id == parseInt(match.params.dishId, 10)
        )[0]
      );

      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id == parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId == parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
