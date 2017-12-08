import React, { Component } from 'react'
import './modal.scss';



class ReactModal extends Component {
  setClose = () => {
    const { closeCallback } = this.props;
    closeCallback(false)
  }

  onSubmitFn = (e) => {
    const { flag } = this.props;
    e.preventDefault();
    switch(flag){
      case 1:
        console.log(e.target.username.value);
        break;
      case 2:
        console.log(e.target.username.value);
        break;
    }
  }

  render () {
    const {show, flag} = this.props;

    const getDom = function(){
      switch(flag){
          case 1:
            return (
              <div>
                <div className="form-line">
                  <label>姓名:</label>
                  <input placeholder="姓名" name="username"/>
                </div>
                <div className="form-line">
                  <label>年龄:</label>
                  <input placeholder="年龄" name="age"/>
                </div>
                <div className="form-line">
                  <label>性别:</label>
                  <div className="modal-radioGroup">
                    <div className="modal-radioGroup-item">
                      <input type="radio" name="sex"/><span>男</span>
                    </div>
                    <div className="modal-radioGroup-item">
                      <input type="radio" name="sex"/><span>女</span>
                    </div>
                  </div>
                </div>
              </div>)
          case 2:
              return(
                <div>
                <div className="form-line">
                  <label>姓名2:</label>
                  <input placeholder="姓名" name="username2"/>
                </div>
                <div className="form-line">
                  <label>年龄3:</label>
                  <input placeholder="年龄" name="age"/>
                </div>
                <div className="form-line">
                  <label>性别4:</label>
                  <div className="modal-radioGroup">
                    <div className="modal-radioGroup-item">
                      <input type="radio" name="sex"/><span>男</span>
                    </div>
                    <div className="modal-radioGroup-item">
                      <input type="radio" name="sex"/><span>女</span>
                    </div>
                  </div>
                </div>
              </div>)
      }
    }
    console.log(getDom());

    return (
      <div className={show ? 'modal-show':'modal-hide'}>
        <div className="global-style-diy" onClick={this.setClose}></div>
        <div className="modal-container">
            <div className="modal-container-title">表单</div>
            <form className="form-container" onSubmit={this.onSubmitFn}>
              {getDom()}
              <div className="buttonGroup">
                <div className="button-item">
                   <input type="submit" className="submit-btn"/>
                   <input type="reset" className="reset-btn"/>
                </div>
              </div>
            </form>
        </div>
      </div>
      
    )
  }
}

export default ReactModal