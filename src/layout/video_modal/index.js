import React from 'react';

import './style.css';
import YouTube from 'react-youtube';


class Video_modal extends React.Component{
    constructor(props){
        super(props)
          this.state={}
         
    }

    render(){
     
    
  
    return(
        <div class="container">
        <h2>Carousel Example</h2>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner">
      
            <div class="item active">
              <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Los Angeles" style={{width:"100%"}} />
              <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>LA is always so much fun!</p>
              </div>
            </div>
      
            <div class="item">
              <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" alt="Chicago" style={{width:"100%"}}/>
              <div class="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>
          
            <div class="item">
              <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="New York" style={{width:"100%"}}/>
              <div class="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
        
          </div>
      
          {/* <!-- Left and right controls --> */}
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      
     
     )
 }
}

export default Video_modal;