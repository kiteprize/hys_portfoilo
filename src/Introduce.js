import React, {Component} from "react";
import ReactTextTransition from "react-text-transition";
import './App.css';

const texts = ["풀스택 개발자가 되고싶은 ", "기획과 개발을 동시에 배우고 있는 ", "웹 개발자의 첫 걸음을 떼고있는 "];

class IntroduceLine extends Component{
    state = {
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        customIndex: 0
    };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
            textFastIndex: this.state.textFastIndex + 1
            });
        }, 3000);
    }    

    render(){
        return(
            <React.Fragment>
                <ReactTextTransition direction="up" inline>
                    {texts[this.state.textFastIndex % texts.length]}
                </ReactTextTransition>
            </React.Fragment>
        );
    }
}

export default IntroduceLine;
