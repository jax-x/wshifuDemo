import React, { Component  } from 'react';
import { Button,Table,Card  } from 'antd'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import ajax from '../utils/request' 

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
      const token = (this.props.location && this.props.location.query && this.props.location.query.token) || '';
        if(token){
            document.cookie = `token=${token};max-age=300`;//设置过期时间
        }
        this.setState({
          activeTabKey:'all'
        })
        
        ajax({
          url :'https://test-user-api.wanshifu.com/orders/normal/lists',
          type:'POST',
          data:{ 
            startTime: '2020-03-26',
            endTime: '2020-09-22',
            subUserId: 'all',
            time: 4,
            orderStatus: 'all'
          },
          success : (data)=>{
            console.log(data,'list');
          }
        })
      }

      // 封装获取token的方法
    getcookie = (keys) => {
      let arr = document.cookie.split(";");
  　　for(let i=0; i<arr.length; i++){
          let carr=arr[i].split("=");
  　　　　if(carr[0].trim() === keys){
  　　　　    return carr[i];
  　　　　}
  　　}
  　　return false;
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
      // const [selectionType, setSelectionType] = useState('checkbox');
        const {
            activeTabKey
          } = this.state
        const columns = [
            {
              title: '类型',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '地址',
              dataIndex: 'pro',
              key: 'pro',
            },
            {
              title: '费用',
              dataIndex: 'fee',
              key: 'fee',
            },
            {
              title: '状态',
              dataIndex: 'status',
              key: 'status',
              render:text=>{
                if(text===1){
                  return '发布任务'
                }
                if(text===2){
                  return '师傅报价'
                }
                if(text===3){
                  return '指派师傅'
                }
              }
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
              tab: '安装',
            },
            {
              key: 'doing',
              tab: '维修',
            },
            {
              key: 'done',
              tab: '送货到家并维修',
            },
            
          ];
          const token = this.getcookie('token');
          if(!token){
            return <Redirect to='/' />;
          }
          const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record) => ({
              disabled: record.name === 'Disabled User',
              // Column configuration not to be checked
              name: record.name,
            }),
          };
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
                      rowSelection={{
                        ...rowSelection,
                      }}
                    />
                </Card>
            </div>
        );
    }
}

export default List;