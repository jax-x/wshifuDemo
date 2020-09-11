import React, { Component } from 'react';
import { Upload,Descriptions  } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
class Uploadpic extends Component {
    componentDidMount(){
        console.log(this.props.history.location.state,'参数');
    }

    handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
          previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { msg } = this.props.history.location.state
        const fileList = []
        const uploadButton = (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );
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
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
            </div>
        );
    }
}

export default Uploadpic;