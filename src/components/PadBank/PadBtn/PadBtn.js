import React from 'react';
import './PadBtn.css';

class PadBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnStyle: 'inactive-style' 
        }
        this.playSound = this.playSound.bind(this);
        this.acivateBtn = this.activateBtn.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
        if (e.which === this.props.keyWhich) {
            this.playSound(this.props.clipId);
        }    
    }
    activateBtn() {
        // depress button
        this.setState({
            btnStyle: 'active-style'
        });
        //wait 100ms and release button
        setTimeout(function() {
            this.setState({
                btnStyle: 'inactive-style'
            });
        }.bind(this), 100);
    }
    playSound(e) {
        // const sound = document.getElementById(this.props.keyTrigger);
        // const sound = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play()
        this.activateBtn();
        this.props.handlePadBtn(this.props.clipId);
    }
    render() {
        return (
            <div id={this.props.clipId} className={this.state.btnStyle} onClick={this.playSound}>
                {this.props.keyTrigger}
                <audio id={this.props.keyTrigger} src={this.props.clipUrl} className="clip" />
            </div>
        );
    }
}

export default PadBtn;