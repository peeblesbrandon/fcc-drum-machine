import React from 'react';
import './PadBank.css';
import PadBtn from './PadBtn/PadBtn';
import sounds from './sound_map.json';

class PadBank extends React.Component {
    render() {
        const padBank = sounds.map((sound) => {
            return (
                <PadBtn
                    id={sound.id}
                    className="drum-pad"
                    handlePadBtn={this.props.handlePadBtn}
                    keyWhich={sound.keyWhich}
                    keyTrigger={sound.keyTrigger}
                    clipId={sound.id}
                    clipUrl={sound.url} />
            );
        });
        return (
            <div id="pad-bank">
                {padBank}
            </div>
        );
    }
}

export default PadBank;