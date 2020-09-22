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
      console.log(this.props,'kkkkkkkkkkkkkkkkkkkkkk');
      const token = (this.props.location && this.props.location.query && this.props.location.query.token) || '';
        if(token){
            document.cookie = `token=${token};max-age=60`;//设置过期时间
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
            console.log(data,'数据');
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
              title: '费用',
              dataIndex: 'fee',
              key: 'fee',
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