import React from 'react';
import './Display.css';

class Display extends React.Component {
    render () {
        return (
            <p className="d-block bg-secondary text-white">{this.props.msg}</p>
        );
    }
}

export default Display;