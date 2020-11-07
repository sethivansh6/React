import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          };

          console.log('Menu constructor is rendered!');
        }
        componentDidMount(){
          console.log('COMPONENTS DID MOUNT IN DISHSETAIL!');
        }
        componentDidUpdate()
        {
          console.log("COMPONENT UPDATED!")
        }

        renderComments(comment)
        {
            console.log(comment);
            if(comment.length>0)
            {
                const com = this.props.dish.comments.map((comment)=>{
                    return(
                        <ul className="list-group" key={comment.id} >
                            <h4><li className="list-group-item">-{comment.comment}</li></h4>
                            <h5><li className="list-group-item">--{comment.author}</li></h5>
                            <br></br>
                        </ul>
                    )
                });

                return (com);
            }
            else
            {
                return(
                <div>
                    <h5>No comments yet</h5>
                </div>
                );
            }
            
        }
     

      render()
      {
        console.log("DISHDETAIL COMPONENT MOUNTED AND RENDERED!")
          return(
            <div className="row">
         <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>
                {this.props.dish.name}
              </CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
         </div>
         <div className="col-12 col-md-5 m-1">
           {this.renderComments(this.props.dish.comments)}
         </div>
     </div>
          )
      }
}

export default DishDetail;