import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_03.css';

function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        PROJECT
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        PROJECT
                    </div>
                </div>
            </MobileView>
        </div>
    )
}
export default App;