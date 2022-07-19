import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_03.css';

function App(){
    const settings ={
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragable: true,
    };

    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        PROJECTS
                    </div>
                    <div className="browser-container">
                        <Slider {...settings}>
                            <div className="Browser-Card">
                                <img className="Browser-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Browser-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Browser-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Browser-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                            <div className="Browser-Card">
                                <img className="Browser-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Browser-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Browser-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Browser-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                            <div className="Browser-Card">
                                <img className="Browser-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Browser-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Browser-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Browser-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        PROJECTS
                    </div>
                    <div className="mobile-container">
                        <Slider {...settings}>
                            <div className="Mobile-Card">
                                <img className="Mobile-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Mobile-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Mobile-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Mobile-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                            <div className="Mobile-Card">
                                <img className="Mobile-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Mobile-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Mobile-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Mobile-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                            <div className="Mobile-Card">
                                <img className="Mobile-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                                <div className="Mobile-Card-Title">
                                    개인 포트폴리오 사이트
                                </div>
                                <div className="Mobile-Card-SubTitle">
                                    React를 사용한 반응형 포트폴리오 페이지
                                </div>
                                <div className="Mobile-Card-Detail">
                                    자세히 보기
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </MobileView>
        </div>
    )
}
export default App;