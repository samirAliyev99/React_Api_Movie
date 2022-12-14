import "./app.css";
import React, { Component } from 'react'
import Header from "./Header";
export default class   extends Component {


  constructor(props){
    super(props);
  }

  render() {


    console.log(this.props)
    return (
      
      <div>
          <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col-4 col-1">Title</div>
            <div className="col col-2">Movie Year</div>
            <div className="col col-3">Rank of Movie</div>
            <div className="col col-4">Genre of Movie </div>
          </li>
          
          <li className="table-row">
            <div className="col-4 col-1" data-label="Title">{this.props.title}</div>
            <div className="col col-2" data-label="Movie Year">{this.props.year}</div>
            <div className="col col-3" data-label="Rank of Movie">{this.props.rating}</div>
            <div className="col col-4" data-label="Genre of Movie">{this.props.genre}</div>
          </li>
       
        </ul>
       </div>  
      </div>
    )
  }
}
