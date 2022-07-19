import React, {Component} from "react";
// import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Epic_04"


export default class Epic_4_Slider extends Component{
    render(){
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        };
        return(
            <div className="background">
                <Slider className="Browser-container" {...settings}>
                <div>
                    <img src="portfolio_pics/portfolio1.png" alt="1"/>
                </div>
                <div>
                    <img src="portfolio_pics/portfolio2.png" alt="2"/>
                </div>
                <div>
                    <img src="portfolio_pics/portfolio3.png" alt="3"/>
                </div>
                </Slider>
            </div>
        //    <div className="background">
        //        <BrowserView>
        //            <div className="Browser-container">
        //                <Slider {...settings}>
        //                    <div>
        //                        <img src="portfolio_pics/portfolio1.png" alt="1"/>
        //                    </div>
        //                    <div>
        //                        <img src="portfolio_pics/portfolio2.png" alt="2"/>
        //                    </div>
        //                    <div>
        //                        <img src="portfolio_pics/portfolio3.png" alt="3"/>
        //                    </div>
        //                </Slider>
        //            </div>
        //        </BrowserView>
        //        <MobileView>
       
        //        </MobileView>
        //    </div>
       );
   } 
}