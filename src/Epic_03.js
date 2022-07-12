import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_03.css';

function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        PROJECTS
                    </div>
                </div>
            </BrowserView>
            <MobileView>
            </MobileView>
        </div>
    )
}
export default App;