import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../Logo/clouds.jpg';


const Carousel = props => (
	<div className = 'container-center'>
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Logo} style={{width: 500, height: 500, opacity: .7}} alt="First slide" />
            <div className="carousel-caption d-none d-md-block" style={{color: "#000000", padding: '20px'}}>
            <h1> <strong> Welcome! </strong></h1>
            <h4> <strong> Keep up to date with your favourite music trends or Learn music like you've never done before </strong> </h4>
			 </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Logo} style={{width: 500, height: 500, opacity: .7}} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block" style={{color: "#000000", padding: '20px'}}>
			    <h1> <strong> About Us </strong> </h1>
          <h4> <strong> We're a team of four young energetic coders learning our hand at React.js. Graduating from this bootcamp we would like bring our new found skills and friendships into the world Happy Coding Everyone! </strong> </h4>
          
			 </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
	);

export default Carousel;