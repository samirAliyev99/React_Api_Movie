import React, { Component,createRef } from 'react'
import './Header.css'
import App from './App';
import axios from 'axios';

export default class Header extends Component {
 

  constructor(props){
    super(props);

    this.state={
      search:"",
      title:"",
      rating:"",
      year:"",
      genre:"",
      country:""
    }

    this.inpRef = createRef();
    this.handle_submission=this.handle_submission.bind(this);
  }

  handle_submission = (event) => {
    


    event.preventDefault();

    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=the%20${this.inpRef.current.value}`).then(({data})=>
    {
      let title=data.Title;
      let year=data.Year;
      let rating =data.imdbRating;
      let genre=data.Genre;
      let country=data.Country;
      this.setState({
        search:this.inpRef.current.value,
        title,
        year,
        rating,
        genre,
        country
        
      })
    })


  }
  
  render() {
    return (
      <div>
           <form onSubmit={this.handle_submission} role="search">
              <label htmlFor="search">Search for stuff</label>
              <input  id="search" type="search" placeholder="Search..." ref={this.inpRef} autoFocus required />
              <button type="submit">Go</button>    
          </form>
       <App title={this.state.title} year={this.state.year} rating={this.state.rating} genre={this.state.genre} country={this.props.country}/> 
    </div>
      
      
    )
  }

}
