import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import {Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish:null
          };

          console.log('Menu constructor is rendered!');
      }

      componentDidMount(){
        console.log('COMPONENTS DID MOUNT in menu!');
      }

      //set state is used for state selection
      onDishSelect(dish)
      {
        this.setState({selectedDish:dish});
      }

      renderDish(dish)
      {
        if(dish!=null)
        {
          return(
            <DishDetail dish={dish} />
          )
        }
        else
        {
          return (
          <div></div>
          );
        }
      }
  
      render() {
          const menu = this.props.dishes.map((dish) => {
              return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={()=> this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
              );
          });
          console.log("IN RENDER!");
          return (
            <div className="container">
              <div className="row">
                {menu}
              </div>
                {this.renderDish(this.state.selectedDish)}
              </div>
          );
      }
  }
  
  export default Menu;