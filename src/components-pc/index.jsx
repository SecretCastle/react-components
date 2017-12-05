import React, { Component } from 'react'
import TableCp from './table';
import { Table } from 'antd';
import 'antd/dist/antd.css'

class PCDemo extends Component {
  render () {
    const columns = [
      {name:'操作', dataIndex:'machine_work_stream', fix:'left'},
      {name:'时间', dataIndex:'machine_time_action', fix:'left'},
      {name:'状态', dataIndex:'machine_work_status', fix:'right'},
      {name:'标记', dataIndex:'machine_work_sign', fix:'right'},
      {name:'Switch', dataIndex:'Switch'},
      {name:'WorkMode', dataIndex:'WorkMode'},
      {name:'WindSpeed', dataIndex:'WindSpeed'},
      {name:'Power', dataIndex:'Power'},
      {name:'Lock', dataIndex:'Lock'},
      {name:'WorkTime', dataIndex:'WorkTime'},
      {name:'ChildLock', dataIndex:'ChildLock'},
      {name:'Timing', dataIndex:'Timing'},
      {name:'Power2', dataIndex:'Power2'}
    ]

    const dataSource = [
      {
        key:'1',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch0',
        WorkMode:'data1',
        WindSpeed:'data1',
        Power:'data1',
        Lock:'data1',
        WorkTime:'data1',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'2',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch1',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'3',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'4',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'5',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'6',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'7',
        machine_work_stream: 'down',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      },
      {
        key:'8',
        machine_work_stream: 'up',
        machine_time_action: '2017-12-01',
        machine_work_status: 'success',
        machine_work_sign: 'ok',
        Switch:'switch5',
        WorkMode:'data2',
        WindSpeed:'data2',
        Power:'data2',
        Lock:'data2',
        WorkTime:'data2',
        ChildLock:'data2',
        Timing:'data2',
        Power2:'data2'
      }
    ]

    return (
      <div className="common-display-area">
        <p>table 组件，固定头部</p>
        <TableCp columns={columns} dataSource={dataSource}/>
      </div>
    )
  }
}

class PC extends Component {
  render () {
    return (
      <div>
        <PCDemo />
      </div>
    )
  }
}


export default PC