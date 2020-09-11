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
