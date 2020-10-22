import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Button, Form, } from 'antd'
import { Link,Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import ajax from '../utils/request' 
// import $axios from '../request'
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
        //     url : "https://test-user-web-api.wanshifu.com/user/security/login",  // url---->地址
        //     type : "POST",   // type ---> 请求方式
        //     async : false,   // async----> 同步：false，异步：true 
        //     // dataType : "jsonp",
        //     data:{
        //         principal:"andrewli",
        //         password:'test@123456'
        //     },
        //     success : (data)=>{   //返回接受信息
        //         console.log(data,'登陆接口');
        //     }
        // })
        // const getC =  document.cookie
        // console.log(getC,'cookie');
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
        console.log('验证失败');
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