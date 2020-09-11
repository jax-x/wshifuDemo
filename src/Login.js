import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Button, Form,Checkbox, } from 'antd'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
@connect(
  (state) => state,
  (dispatch) => ({
    dispatch
})
)

class Login extends Component {
    login=()=>{}
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };

        console.log(this.props, 'props');
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