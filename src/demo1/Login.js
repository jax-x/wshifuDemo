import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Button, Form, } from 'antd'
import { Link,Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import ajax from '../utils/request' 
@connect(
  (state) => state,
  (dispatch) => ({ dispatch })
)

class Login extends Component {
    state={
      formValue:false
    }

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

    // gotoLogin=()=>{
    //     const { formValue } = this.state
    //     if(formValue){
    //         return ( 
    //             <Link to={{ pathname:'/list',query:{token:'123123'}}}>登录</Link>
    //          )
    //     }
    //     return <Link to='/'>登陆</Link>
    // }

    gotoLogin = () => ({pathname:'/list',query:{token:'12345678'}});

    
    onFinish=(value)=>{
        console.log(value,'表单验证');
        if(value.username && value.password){
            this.setState({ formValue:true })
        }
        this.gotoLogin()
    }

    onFinishFailed=(errorInfo)=>{
        console.log(errorInfo,'errorInfoerrorInfov');
        this.setState({ formValue:false })
        return <Redirect to='/' />
    }
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 }
          };

          
        return (
            <div style={{ padding: 30 }}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="登录名"
                        name="username"
                        rules={[{ required: true, message: '请输入登录名' }]}
                    >
                        <Input style={{ width:'50%' }} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password style={{ width:'50%' }} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            <Link to={this.gotoLogin}>登陆</Link>
                        </Button>                        
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;