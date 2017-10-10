import React from 'react';
import MultiSelector from './multiselecor'

class Demo extends React.Component {
  state =  {
    isShow:false,
    data:['周一','周二']
  }

  showMultiSelector = () => {
    this.setState({
      isShow:true
    })
  }

  render(){
    return(
      <div>
        <button value="click me" onClick={this.showMultiSelector}>click me</button>
        <MultiSelector 
          isShow={this.state.isShow}
          onShowTheMulti={ e => { this.setState({ isShow:e.isShow })}}
          type={'week'}
          selectedFn = {e=>{this.setState({data:e})}}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Demo;