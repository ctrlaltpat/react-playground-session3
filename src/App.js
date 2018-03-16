import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Picture} from './Picture.js'

class App extends Component {
  constructor(){
    super();
    this.state= {
      text: "something",
      colour: "black",
      imgURL: "https://picsum.photos/300/300/?random"
    }
  }
  textInput=(e)=> {
    const stuff = e.target.value;
    this.setState(prevState =>({text: stuff}))
    this.setState(prevState =>({colour: stuff}))
    const pic = "https://picsum.photos/300/300/?image=" + this.state.text
    this.setState(prevState => ({imgURL: pic}))
    // console.log(stuff);
  }
  buttonClick=(e)=> {
    // alert(this.state.text);
    const pic = "https://picsum.photos/300/300/?image=" + this.state.text
    this.setState(prevState => ({imgURL: pic}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: this.state.colour }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input className="input1" type="text" name="input1" onChange={this.textInput}/>
        <input type="button1" type="button" name="button1" value="click" onClick={this.buttonClick}/>
        <Picture imageSource={this.state.imgURL}  />

      </div>
    );
  }
}

export default App;
