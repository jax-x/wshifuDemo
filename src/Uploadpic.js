import React, { Component } from 'react';
import { Upload,Descriptions  } from 'antd'

class Uploadpic extends Component {
    componentDidMount(){
        console.log(this.props.history.location.state,'参数');
    }

    render() {
        const { msg } = this.props.history.location.state
        console.log(msg,'kkkkkkkk');
        return (
            <div style={{ padding:30 }}>
                <Descriptions title="详情信息">
                    <Descriptions.Item label="序号">{msg.name}</Descriptions.Item>
                    <Descriptions.Item label="省份">{msg.pro}</Descriptions.Item>
                    <Descriptions.Item label="城市">{msg.city}</Descriptions.Item>
                </Descriptions> 
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Uploadpic;