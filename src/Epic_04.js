import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_04.css';

function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        Profile
                    </div>
                    <img className="Browser-Represent-Image" src="Icons/represent_image.png" alt="represent"/>
                    <div className="Browser-Name">
                        황연상
                    </div>
                    <div className="Browser-Job">
                        웹 개발자
                    </div>
                    <div className="Browser-Icon-Area">
                        <div className="Browser-Icon-Area-Name">
                            이 포트폴리오를 만들 때 쓴 것들
                        </div>
                        <div className="Browser-Icon-Area-Splitline"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/css.png" alt="css"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/html.png" alt="html"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/javascript.png" alt="javascript"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/react.png" alt="react"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/vscode.png" alt="vscode"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                    </div>
                    <div className="Browser-Icon-Area">
                        <div className="Browser-Icon-Area-Name">
                            연락처
                        </div>
                        <div className="Browser-Icon-Area-Splitline"/>
                        <a href="mailto:dustkd4294@naver.com">
                            <img className="Browser-Contact-icon" src="Icons/Email.png" alt="Email"/>
                        </a>
                        <a href="https://github.com/kiteprize">
                            <img className="Browser-Contact-icon" src="Icons/Github.png" alt="Github"/>
                        </a>
                    </div>
                    <a href="https://kiteprize.github.io/kyt_portfolio/" className="Browser-Hyperlink-Text">
                        디자인은 누가 했는지 궁금하신가요? &gt;
                    </a>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        Profile
                    </div>
                    <img className="Mobile-Represent-Image" src="Icons/represent_image.png" alt="represent"/>
                    <div className="Mobile-Name">
                        황연상
                    </div>
                    <div className="Mobile-Job">
                        developer
                    </div>
                    <div className="Mobile-Icon-Area">
                        <div className="Mobile-Icon-Area-Name">
                            USED TOOL & LANGUAGE & FRAMEWORK
                        </div>
                        <div className="Mobile-Icon-Area-Splitline"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/css.png" alt="css"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/html.png" alt="html"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/javascript.png" alt="javascript"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/react.png" alt="react"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/vscode.png" alt="vscode"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                    </div>
                    <div className="Mobile-Icon-Area">
                        <div className="Mobile-Icon-Area-Name">
                            CONTACT
                        </div>
                        <div className="Mobile-Icon-Area-Splitline"/>
                        <a href="mailto:dustkd4294@naver.com">
                            <img className="Mobile-Contact-icon" src="Icons/Email.png" alt="Email"/>
                        </a>
                        <a href="https://github.com/kiteprize">
                            <img className="Mobile-Contact-icon" src="Icons/Github.png" alt="Github"/>
                        </a>
                    </div>
                    <a href="https://kiteprize.github.io/kyt_portfolio/" className="Mobile-Hyperlink-Text">
                        디자인은 누가 했는지 궁금하신가요? &gt;
                    </a>
                </div>
            </MobileView>
        </div>
    );
}
export default App;