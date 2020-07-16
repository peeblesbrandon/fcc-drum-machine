import React from 'react';
import './App.css';
import PadBank from '../PadBank/PadBank';
import Display from '../Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMsg: 'Let\'s rock!'
    }
    this.handlePadBtn = this.handlePadBtn.bind(this);
  }

  handlePadBtn(clipId) {
    this.setState({
      displayMsg: clipId.replace(/-/g, ' ')
    });
  }
  
  render() {
      return (
      <div id="drum-machine" className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <PadBank id="pad-bank" handlePadBtn={this.handlePadBtn} handle/>
        <Display id="display" className="d-block p-50" msg={this.state.displayMsg} />
      </div>
    );
  }
}

export default App;
