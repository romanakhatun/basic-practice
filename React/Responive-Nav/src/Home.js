import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel infiniteLoop useKeyboardArrows autoPlay>
					<div>
						<img src={img1} alt="" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src={img2} alt="" />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src={img3} alt="" />
						<p className="legend">Legend 3</p>
					</div>
					<div>
						<img src={img4} alt="" />
						<p className="legend">Legend 4</p>
					</div>
				</Carousel>
			</div>
		);
	}
}

export default Home;
