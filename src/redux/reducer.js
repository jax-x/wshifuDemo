function reducer(state, action) {
    switch (action.type) {
      case 'all':
      return {
        card: [
          {name:'1',pro:'黑龙江',city:'哈尔滨'},
          {name:'1',pro:'吉林',city:'长春'},
          {name:'1',pro:'广东',city:'广州'},
          {name:'1',pro:'内蒙古',city:'呼和浩特'},
          {name:'1',pro:'河北',city:'石家庄'},
          {name:'1',pro:'河南',city:'郑州'},
          {name:'1',pro:'江西',city:'南昌'},
          {name:'1',pro:'山西',city:'太原'},
          {name:'1',pro:'陕西',city:'西安'},
          {name:'1',pro:'浙江',city:'杭州'},
          {name:'1',pro:'江苏',city:'南京'},
          {name:'1',pro:'湖南',city:'长沙'}
        ],
        dialog: state.dialog  // 不需要修改，使用旧state的值
      }
  
      case 'doing':
      return {
        card: [
          
          {name:'2',pro:'河北',city:'石家庄'},
          {name:'2',pro:'河南',city:'郑州'},
          {name:'2',pro:'广东',city:'广州'},
          {name:'2',pro:'内蒙古',city:'呼和浩特'},
          {name:'2',pro:'山西',city:'太原'},
          {name:'2',pro:'陕西',city:'西安'},
          {name:'2',pro:'浙江',city:'杭州'},
          {name:'2',pro:'江西',city:'南昌'},
          {name:'2',pro:'黑龙江',city:'哈尔滨'},
          {name:'2',pro:'吉林',city:'长春'},
          {name:'2',pro:'江苏',city:'南京'},
          {name:'2',pro:'湖南',city:'长沙'}
        ],
        dialog: {
          status: true
        }
      }
  
      case 'done':
      return {
        card: [
          
          {name:'3',pro:'广东',city:'广州'},
          {name:'3',pro:'内蒙古',city:'呼和浩特'},
          {name:'3',pro:'河北',city:'石家庄'},
          {name:'3',pro:'陕西',city:'西安'},
          {name:'3',pro:'黑龙江',city:'哈尔滨'},
          {name:'3',pro:'吉林',city:'长春'},
          {name:'3',pro:'江苏',city:'南京'},
          {name:'3',pro:'湖南',city:'长沙'},
          {name:'3',pro:'浙江',city:'杭州'},
          {name:'3',pro:'河南',city:'郑州'},
          {name:'3',pro:'江西',city:'南昌'},
          {name:'3',pro:'山西',city:'太原'},
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