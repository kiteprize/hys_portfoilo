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
                </div>
            </MobileView>
        </div>
    );
}
export default App;