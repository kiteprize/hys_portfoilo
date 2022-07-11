import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_02.css';


function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Maintext">
                        SKILLS
                    </div>
                    <div className="Browser-Skillbox">
                    </div>
                    <div className="Browser-Skillbox">
                    </div>
                    <div className="Browser-Skillbox">
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Maintext">
                        SKILLS
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            FRONT END
                        </div>
                        <div className="Header-Underline"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/css.png" alt="css"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/html.png" alt="html"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/javascript.png" alt="javascript"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/react.png" alt="react"/>
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            TOOLS
                        </div>
                        <div className="Header-Underline"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/vscode.png" alt="vscode"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/eclipse.png" alt="eclipse"/>
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            COMMUNICATION
                        </div>
                        <div className="Header-Underline"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
export default App;