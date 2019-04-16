import React, { Component } from 'react';
import './App.css';

class Interruptor extends React.Component{
  constructor(props){
    super(props);
    this.state = {power:false};
  }  
  encenderLuz() {
    this.setState({power:true});
  }
  apagarLuz() {
      this.setState({power:false});
  }
  render(){
    let mensaje
    if(this.state.power){
      mensaje = <span>Lights already on</span>
    } else {
      mensaje = <span>you must turn the ligths up</span>
    }

    return (<div>
              {mensaje}
              <TriggerOn />
              <TriggerOff />              
            </div>)

  }
}

class TriggerOn extends React.Component{
  render(){
    return (<button className='button-trigger on' 
                    onClick={this.encenderLuz}>
                    Enciende la luz 
            </button>)
  }
}
class TriggerOff extends React.Component{
  render(){
    return (<button className='button-trigger off' 
                    onClick={this.apagarLuz}>
                    Luz apagada
            </button>)
  }
}

class App extends Component {
  render() {
    return (<div className='container'>
              <Interruptor />
            </div>);
  }
}

export default App;
