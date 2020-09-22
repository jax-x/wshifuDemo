function reducer(state, action) {
    switch (action.type) {
      case 'all':
      return {
        card: [
          {name:'安装',pro:'黑龙江',fee:'哈尔滨'},
          {name:'安装',pro:'吉林',fee:'长春'},
          {name:'安装',pro:'广东',fee:'广州'},
          {name:'安装',pro:'内蒙古',fee:'呼和浩特'},
          {name:'安装',pro:'河北',fee:'石家庄'},
          {name:'安装',pro:'河南',fee:'郑州'},
          {name:'安装',pro:'江西',fee:'南昌'},
          {name:'安装',pro:'山西',fee:'太原'},
          {name:'安装',pro:'陕西',fee:'西安'},
          {name:'安装',pro:'浙江',fee:'杭州'},
          {name:'安装',pro:'江苏',fee:'南京'},
          {name:'安装',pro:'湖南',fee:'长沙'}
        ],
        dialog: state.dialog  // 不需要修改，使用旧state的值
      }
  
      case 'doing':
      return {
        card: [
          {name:'维修',pro:'河北',fee:'石家庄'},
          {name:'维修',pro:'河南',fee:'郑州'},
          {name:'维修',pro:'广东',fee:'广州'},
          {name:'维修',pro:'内蒙古',fee:'呼和浩特'},
          {name:'维修',pro:'山西',fee:'太原'},
          {name:'维修',pro:'陕西',fee:'西安'},
          {name:'维修',pro:'浙江',fee:'杭州'},
          {name:'维修',pro:'江西',fee:'南昌'},
          {name:'维修',pro:'黑龙江',fee:'哈尔滨'},
          {name:'维修',pro:'吉林',fee:'长春'},
          {name:'维修',pro:'江苏',fee:'南京'},
          {name:'维修',pro:'湖南',fee:'长沙'}
        ],
        dialog: {
          status: true
        }
      }
  
      case 'done':
      return {
        card: [
          
          {name:'送货到家并安装',pro:'广东',fee:'广州'},
          {name:'送货到家并安装',pro:'内蒙古',fee:'呼和浩特'},
          {name:'送货到家并安装',pro:'河北',fee:'石家庄'},
          {name:'送货到家并安装',pro:'陕西',fee:'西安'},
          {name:'送货到家并安装',pro:'黑龙江',fee:'哈尔滨'},
          {name:'送货到家并安装',pro:'吉林',fee:'长春'},
          {name:'送货到家并安装',pro:'江苏',fee:'南京'},
          {name:'送货到家并安装',pro:'湖南',fee:'长沙'},
          {name:'送货到家并安装',pro:'浙江',fee:'杭州'},
          {name:'送货到家并安装',pro:'河南',fee:'郑州'},
          {name:'送货到家并安装',pro:'江西',fee:'南昌'},
          {name:'送货到家并安装',pro:'山西',fee:'太原'},
        ],
        dialog: {
          status: false
        }
      }
  
      default:
      return state  // 没有匹配的action type，返回原来的state
    }
  }

  export default reducer