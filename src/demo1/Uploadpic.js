import React, { Component } from 'react';
import { 
  Upload,
  Descriptions,
  Modal,
  Form,
  Input,
  Select,
  Button,
  message
  } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

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
    
      handleChange = (fileList) => {
        console.log(fileList,'0000')
        this.setState({ 
          fileList:fileList.fileList
        });

      }

      handleCancel = () => this.setState({ previewVisible: false });


      beforeUpload=file=>{
       console.log(file,'上传之前的文件');
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error(file.name + "图片大小超出限制，请修改后重新上传", 3);
          return isLt2M;
        }
        const isSize = this.isSize(file);
        return isLt2M && isSize;
      }

      isSize = file => {
        return new Promise((resolve, reject) => {
          let width = 720;
          let height = 649;
          let _URL = window.URL || window.webkitURL;
          let img = new Image();
          img.onload = function() {
            console.log(img.width,img.height,'img999999'); 
            let valid = img.width === width && img.height === height;
            valid ? resolve() : reject();
          };
          img.src = _URL.createObjectURL(file);
        }).then(
          () => {
            return file;
          },
          () => {
            message.error(file.name + "图片尺寸不符合要求，请修改后重新上传！");
            return Promise.reject();
          }
        );
      };

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
        const reData = [
          { name:'家具',key:'jiaju' },
          { name:'卫浴',key:'weiyu' },
          { name:'窗帘',key:'chuanglian' },
          { name:'健身器材',key:'jianshen' }
        ] 
        const normFile = e => {
          console.log('Upload event:', e);
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        };
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
                    label="图片上传"
                    name="pic"
                    rules={[
                      {
                        required: true,
                        message: '请添加图片',
                      },
                    ]}
                    initialValue={fileList}
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      action="/upload.do"
                      listType="picture-card"
                      multiple
                      // fileList={fileList}
                      // onPreview={this.handlePreview}
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
                          message: '请选择!',
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
                          message: '请选择!',
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