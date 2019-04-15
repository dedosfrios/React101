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

class App extends Component {
  render() {
    return (
        <Mensaje color="pink" size="5em" contenido="Fuck this" />
      );
  }
}

export default App;
