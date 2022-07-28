import React from "react";
import Drawer from "react-bottom-drawer";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
<<<<<<< HEAD
import Epic04 from "./Epic_04"
=======
>>>>>>> test
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_03.css';

function App(){
<<<<<<< HEAD
    const [isVisible, setIsVisible] = React.useState(false);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => setIsVisible(false), []);  
=======
>>>>>>> test
    const settings ={
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragable: true,
    };
<<<<<<< HEAD

=======
>>>>>>> test
    return(
        <div>
            <BrowserView>
                <div className="Browser-MainTitle">
                    개발
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src={require("./Card_1_1_pics/pic1.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic2.png")}alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic3.png")} alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-SubTitle">
                    부제목
                </div>
                <div className="Browser-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
                </div>
                <div className="Browser-SplitLine"/>
                <div className="Browser-MainTitle">
                    기획
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src={require("./Card_1_1_pics/pic1.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic2.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic3.png")} alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-SubTitle">
                    부제목
                </div>
                <div className="Browser-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
                </div>
            </BrowserView>
            <MobileView>
<<<<<<< HEAD
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
                                <div className="Mobile-Card-Detail" onClick={openDrawer}>
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
                                <div className="Mobile-Card-Detail" onClick={openDrawer}>
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
                                <div className="Mobile-Card-Detail" onClick={openDrawer}>
                                    자세히 보기
                                </div>
                            </div>
                        </Slider>
                        <Drawer
                                duration={400}
                                hideScrollbars={true}
                                onClose={closeDrawer}
                                isVisible={isVisible}
                                className={"drawer"}
                            >
                                <Epic04 />
                            </Drawer>
                    </div>
                    <Drawer
                        duration={400}
                        hideScrollbars={true}
                        onClose={closeDrawer}
                        isVisible={isVisible}
                        className={"drawer"}
                    >
                        <Epic04 />
                    </Drawer>
=======
                <div className="Mobile-MainTitle">
                    개발
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src={require("./Card_1_1_pics/pic1.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic2.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic3.png")} alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-SubTitle">
                    부제목
                </div>
                <div className="Mobile-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
                </div>
                <div className="Mobile-SplitLine"/>
                <div className="Mobile-MainTitle">
                    기획
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src={require("./Card_1_1_pics/pic1.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic2.png")} alt="pics"/>
                        <img src={require("./Card_1_1_pics/pic3.png")} alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-SubTitle">
                    부제목
                </div>
                <div className="Mobile-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
>>>>>>> test
                </div>
            </MobileView>
        </div>
    );
}
export default App;