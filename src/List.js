import React, { Component } from 'react';
import { Input, Button, Form,Checkbox,Table,Card,Upload  } from 'antd'
import { connect } from 'react-redux'
@connect(
    (state) => state,
    (dispatch) => ({
      dispatch
  })
  )
class List extends Component {
    state={
        activeTabKey:'all'
    }

    componentDidMount() {
        this.setState({
          activeTabKey:'all'
        })
      }

    onTabChange=(activeTabKey)=>{
        const {dispatch} = this.props
        this.setState({activeTabKey})
        dispatch({
          type:activeTabKey,
        })
      }

      clickDetail=(e)=>{
        console.log(e,'表格数据');
        this.props.history.push({
            pathname:'/detail',
            state:{
                msg:e
            }
        })
      }
    render() {
        const {
            activeTabKey
          } = this.state
        const columns = [
            {
              title: '序号',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '省份',
              dataIndex: 'pro',
              key: 'pro',
            },
            {
              title: '省会',
              dataIndex: 'city',
              key: 'city',
            },
            {
              title: '操作',
              render:(text,record)=>(
                <Button type='link' onClick={()=>this.clickDetail(record)}>
                  详情
                </Button>
              )
            }
          ];

           const tabList = [
            {
              key: 'all',
              tab: '全部',
            },
            {
              key: 'doing',
              tab: '进行中',
            },
            {
              key: 'done',
              tab: '结束',
            },
            
          ];
        return (
            <div>
                <Card
                  tabList={tabList}
                  bordered={false}
                  onTabChange={this.onTabChange}
                  activeTabKey={activeTabKey}
                >
                    <Table 
                      dataSource={this.props.card}
                      columns={columns}
                      // loading={}
                    />
                </Card>
            </div>
        );
    }
}

export default List;