import React, { Component } from 'react';
import { 
  Upload,
  Descriptions,
  Modal,
  Form,
  Input,
  Select,
  Button
  } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

import Item from 'antd/lib/list/Item';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class Uploadpic extends Component {
  state={
    fileList:[],
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    cate:{
      jiaju:[
        { name:'沙发',key:'shafa' },
        { name:'茶几',key:'chaji'}
      ],
      weiyu:[
        { name:'马桶',key:'matong' },
        { name:'浴缸',key:'yugang' }
      ],
      chuanglian:[
        { name:'卧室',key:'woshi' },
        { name:'客厅',key:'keting' }
      ],
      jianshen:[
        { name:'跑步机',key:'paobuji' },
        { name:'哑铃',key:'yaling' }
      ]
    },
    secData:[],
    fData:''
  }
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
      handleCancel = () => this.setState({ previewVisible: false });
      beforeUpload=file=>{
       console.log(file,'文件'); 
      }

      selectClass=(e)=>{
        const { cate } = this.state
        const secData = cate[e]
        this.setState({ secData,fData:e })
      }
    render() {
        const { msg } = this.props.history.location.state
        const { 
          fileList,
          previewVisible,
          previewImage,
          previewTitle,
          secData,
          fData
        } = this.state
        const uploadButton = (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>上传</div>
            </div>
          );

          const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };

          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
        console.log(msg,'kkkkkkkk'); 
        const reData = [
          { name:'家具',key:'jiaju' },
          { name:'卫浴',key:'weiyu' },
          { name:'窗帘',key:'chuanglian' },
          { name:'健身器材',key:'jianshen' }
        ] 
        return (
            <div style={{ padding:30 }}>
                <Descriptions title="详情信息">
                    <Descriptions.Item label="序号">{msg.name}</Descriptions.Item>
                    <Descriptions.Item label="省份">{msg.pro}</Descriptions.Item>
                    <Descriptions.Item label="城市">{msg.city}</Descriptions.Item>
                </Descriptions> 
               
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <Form
                  {...layout}
                >
                  <Form.Item
                    label="服务类目"
                    name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                  >
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                      beforeUpload={this.beforeUpload}
                    >
                      {fileList.length >= 4 ? null : uploadButton}
                    </Upload>
                      
                  </Form.Item>

                  <Form.Item
                    label="服务类目"
                    name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                  >
                      <Select 
                        style={{ width:'50%' }} 
                        onSelect={this.selectClass}
                        placeholder='请选择...'
                      >
                        {reData.map(item => {
                          return (
                            <Select.Option key={item.key}>
                              {item.name}
                            </Select.Option>  
                          ) 
                        })
                        }
                      </Select>
                  </Form.Item>
                  <Form.Item
                    label="商品类别"
                    name="spClass"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                  >
                      <Select 
                        style={{ width:'50%' }}
                        placeholder='请选择...'
                      >
                        {secData.map(item => {
                          return (
                            <Select.Option key={item.key}>
                              {item.name}
                            </Select.Option>  
                          ) 
                        })
                        }
                      </Select>
                  </Form.Item>
                  {
                    fData && (fData === 'weiyu' || fData === 'jianshen' )?(
                      <Form.Item
                        label="商品尺寸"
                        name="size"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}
                      >
                        <Input 
                          addonAfter={fData && fData ==='weiyu'?'CM':'KG' }
                          placeholder="请输入..." 
                          style={{ width:'50%' }}
                        />
                      </Form.Item>
                    ):null
                  }
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                  </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Uploadpic;