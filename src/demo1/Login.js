import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Button, Form,Checkbox, } from 'antd'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import ajax from '../utils/request' 
@connect(
  (state) => state,
  (dispatch) => ({
    dispatch
})
)

class Login extends Component {
    componentDidMount(){
        // ajax({
        //     method:'get',
        //     url:'http://192.168.1.7:3000/project/542/interface/api',
        //     success: (res)=>{
        //         console.log(res,'请求数据');
        //     }
        // })        
            ajax({
                url : "http://192.168.1.7:3000/project/542/interface/api",  // url---->地址
                type : "POST",   // type ---> 请求方式
                async : true,   // async----> 同步：false，异步：true 
                success : function(data){   //返回接受信息
                    console.log(data,'数据');
                }

                })
            }

    login=()=>{}
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };

        return (
            <div style={{ padding: 30 }}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="登录名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width:'50%' }} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ width:'50%' }} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.login}>
                          <Link to='/list'>登录</Link>
                        </Button>                        
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;