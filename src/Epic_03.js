import React from "react";
import Drawer from "react-bottom-drawer";
import {BrowserView, MobileView} from 'react-device-detect';
import Epic04 from './Epic_04';
import './Epic_03.css';

function App(){
    const [isVisible, setIsVisible] = React.useState(false);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => setIsVisible(false), []);  
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        PROJECTS
                    </div>
                    <div className="Browser-Card">
                        <img className="Browser-Card-Image" src="portfolio_thumbnail/portfolio.png" alt="PortFolio_MainPage"/>
                        <div className="Browser-Card-Title">
                            개인 포트폴리오 사이트
                        </div>
                        <div className="Browser-Card-SubTitle">
                            react를 사용한 반응형 포트폴리오 페이지
                        </div>
                        <div className="Browser-Card-Detail">
                            자세히 보기
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        PROJECTS
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
            </MobileView>
        </div>
    )
}
export default App;