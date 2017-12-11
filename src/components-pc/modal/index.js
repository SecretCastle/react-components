import React, { Component } from 'react'
import Modal from './components';

class ReactModal extends Component {
  state = {
    show: false,
    flag: 1
  }
  clickMe(e, flag){
    this.setState({
      show: true,
      flag: flag
    })
  }

  dataFn (data){
    console.log(data);
  }
  render () {
    return (
      <div>
        <Modal show={this.state.show}  flag={this.state.flag} closeCallback={ e => {this.setState({show: e})}} dataCallback={e => this.dataFn(e)}/>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 1)}>你要点击我哦1</button>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 2)}>你要点击我哦2</button>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 3)}>你要点击我哦3</button>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 4)}>你要点击我哦4</button>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 5)}>你要点击我哦5</button>
        <button style={{padding:5}} onClick={(e) => this.clickMe(e , 6)}>你要点击我哦6</button>
      </div>
    )
  }
}

export default ReactModal