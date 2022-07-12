import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_02.css';


function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        SKILLS
                    </div>
                    <div className="Browser-Skillbox">
                        <div className="Browser-Skillbox-Header">
                            FRONT END
                        </div>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/css.png" alt="css"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/html.png" alt="html"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/javascript.png" alt="javascript"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/react.png" alt="react"/>
                    </div>
                    <div className="Browser-Skillbox">
                        <div className="Browser-Skillbox-Header">
                            TOOLS
                        </div>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/vscode.png" alt="vscode"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/eclipse.png" alt="eclipse"/>
                    </div>
                    <div className="Browser-Skillbox">
                        <div className="Browser-Skillbox-Header">
                            COMMUNICATION
                        </div>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        SKILLS
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            FRONT END
                        </div>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/css.png" alt="css"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/html.png" alt="html"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/javascript.png" alt="javascript"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/react.png" alt="react"/>
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            TOOLS
                        </div>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/vscode.png" alt="vscode"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/eclipse.png" alt="eclipse"/>
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            COMMUNICATION
                        </div>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
export default App;