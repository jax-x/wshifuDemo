import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom';
import Login from '../src/demo1/Login';
import Pic from '../src/demo1/Uploadpic';
import List from '../src/demo1/List';



const BasicRoute = () => (
    <BrowserRouter>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/detail" component={Pic}/>
                <Route exact path="/list" component={List}/>
            </Switch>
        </HashRouter>
    </BrowserRouter>
);


export default BasicRoute;