function reducer(state, action) {
    switch (action.type) {
      case 'all':
      return {
        card: [
          {name:'安装',pro:'黑龙江',fee:20,status:1},
          {name:'安装',pro:'吉林',fee:20,status:1},
          {name:'安装',pro:'广东',fee:20,status:1},
          {name:'安装',pro:'内蒙古',fee:20,status:1},
          {name:'安装',pro:'河北',fee:20,status:1},
          {name:'安装',pro:'河南',fee:20,status:1},
          {name:'安装',pro:'江西',fee:20,status:1},
          {name:'安装',pro:'山西',fee:20,status:1},
          {name:'安装',pro:'陕西',fee:20,status:1},
          {name:'安装',pro:'浙江',fee:20,status:1},
          {name:'安装',pro:'江苏',fee:20,status:1},
          {name:'安装',pro:'湖南',fee:20,status:1}
        ],
        dialog: state.dialog  // 不需要修改，使用旧state的值
      }
  
      case 'doing':
      return {
        card: [
          
          {name:'维修',pro:'河北',fee:30,status:2},
          {name:'维修',pro:'河南',fee:30,status:2},
          {name:'维修',pro:'广东',fee:30,status:2},
          {name:'维修',pro:'内蒙古',fee:30,status:2},
          {name:'维修',pro:'山西',fee:30,status:2},
          {name:'维修',pro:'陕西',fee:30,status:2},
          {name:'维修',pro:'浙江',fee:30,status:2},
          {name:'维修',pro:'江西',fee:30,status:2},
          {name:'维修',pro:'黑龙江',fee:30,status:2},
          {name:'维修',pro:'吉林',fee:30,status:2},
          {name:'维修',pro:'江苏',fee:30,status:2},
          {name:'维修',pro:'湖南',fee:30,status:2}
        ],
        dddo:{do:'0000'},
        dialog: {
          status: true
        }
      }
  
      case 'done':
      return {
        card: [
          
          {name:'送货到家并安装',pro:'广东',fee:40,status:3},
          {name:'送货到家并安装',pro:'内蒙古',fee:40,status:3},
          {name:'送货到家并安装',pro:'河北',fee:40,status:3},
          {name:'送货到家并安装',pro:'陕西',fee:40,status:3},
          {name:'送货到家并安装',pro:'黑龙江',fee:40,status:3},
          {name:'送货到家并安装',pro:'吉林',fee:40,status:3},
          {name:'送货到家并安装',pro:'江苏',fee:40,status:3},
          {name:'送货到家并安装',pro:'湖南',fee:40,status:3},
          {name:'送货到家并安装',pro:'浙江',fee:40,status:3},
          {name:'送货到家并安装',pro:'河南',fee:40,status:3},
          {name:'送货到家并安装',pro:'江西',fee:40,status:3},
          {name:'送货到家并安装',pro:'山西',fee:40,status:3},
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