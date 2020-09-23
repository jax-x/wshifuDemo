import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Login from './Login'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import Router from './Router'
var initState = {
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
}
const store = createStore(reducer,initState)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        {/* <App /> */}
        <Router />
    </React.StrictMode>,
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
