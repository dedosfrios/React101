import React, { Component } from 'react';
import './App.css';

class Mensaje extends React.Component{
  render(){
    const styles = {
      color: this.props.color,
      fontSize: this.props.size
    }
    return (<h3 style={styles}>{this.props.contenido}</h3>)
    }
}

class Interruptor extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      power: false
    }
    this.encenderLuz = this.encenderLuz.bind(this)
  }
  encenderLuz(){
    this.setState((state,props)=>{
      return {power: !state.power}   
    })
  }
  render(){
    let mensaje
    if(this.state.power){
      mensaje = <span>you must turn the ligths up</span>
    } else {
      mensaje = <span>Lights already on</span>
    }
    return (<div>
        {contenido}
      </div>)

  }
}

class App extends Component {
  render() {
    return (

      );
  }
}

export default App;
