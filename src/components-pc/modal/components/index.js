import React, { Component } from 'react'
import './modal.scss';



class ReactModal extends Component {
  setClose = () => {
    const { closeCallback } = this.props;
    closeCallback(false)
  }

  onSubmitFn = (e) => {
    const { flag, dataCallback, closeCallback } = this.props;
    e.preventDefault();
    switch(flag){
      case 1:
        dataCallback({
          id: 1,
          flag: flag
        })
        this.form.username1.value = '';
        break;
      case 2:
        dataCallback({
          id: 2,
          flag:flag
        })
        this.form.username2.value = '';
        break;
    }
    closeCallback(false)
  }
  
  componentWillMount(){
    this.formid = new Date().getTime()+"-form-container"
  }

  componentDidMount(){
    this.form = document.getElementById(this.formid)
  }

  getDom(flag){
    switch(flag){
      case 1:
        return (
          <div>
            <div className="form-line">
              <label>姓名:</label>
              <input placeholder="姓名" name="username1" type="text"/>
            </div>
            <div className="form-line">
              <label>年龄:</label>
              <input placeholder="年龄" name="age1"/>
            </div>
          </div>);
          break;
      case 2:
        return(
          <div>
            <div className="form-line">
              <label>姓名2:</label>
              <input placeholder="姓名" name="username2" type="text"/>
            </div>
            <div className="form-line">
              <label>年龄3:</label>
              <input placeholder="年龄" name="age2"/>
            </div>
            <div className="form-line">
              <label>性别4:</label>
              <div className="modal-radioGroup">
                <div className="modal-radioGroup-item">
                  <input type="radio" name="sex2"/><span>男</span>
                </div>
                <div className="modal-radioGroup-item">
                  <input type="radio" name="sex2"/><span>女</span>
                </div>
              </div>
            </div>
          </div>
        )
        break;
      case 3:
        return(
          <div>
            <div className="form-line">
              <label>姓名2:</label>
              <input placeholder="姓名" name="username3" type="text"/>
            </div>
            <div className="form-line">
              <label>年龄3:</label>
              <input placeholder="年龄" name="age3"/>
            </div>
            <div className="form-line">
              <label>性别4:</label>
              <div className="modal-radioGroup">
                <div className="modal-radioGroup-item">
                  <input type="radio" name="sex3"/><span>男</span>
                </div>
                <div className="modal-radioGroup-item">
                  <input type="radio" name="sex3"/><span>女</span>
                </div>
              </div>
            </div>
          </div>
        )
        break;
      }
  }
  render () {
    const {show, flag} = this.props;
    return (
      <div className={show ? 'modal-show':'modal-hide'}>
        <div className="global-style-diy" onClick={this.setClose}></div>
        <div className="modal-container">
            <div className="modal-container-title">表单</div>
            <form className="form-container" encType="multipart/form-data" name="addForm" onSubmit={this.onSubmitFn} id={this.formid}>
              {this.getDom(flag)}
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