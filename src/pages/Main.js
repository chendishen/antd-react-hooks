import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// 测试
import AppTest from '../AppTest';
// example 默认首页
import App from '../App';
// antd-components
import Menu1 from '../pages/antd-components/Navigation/Menu/Demo1';
import Carousel1 from '../pages/antd-components/DataDisplay/Carousel/Demo1';
import Carousel3 from '../pages/antd-components/DataDisplay/Carousel/Demo3';
import Modal1 from '../pages/antd-components/Feedback/Modal/Demo1';
import PullToRefresh2 from '../pages/antd-components/Gesture/pull-to-refresh/Demo2';

// my-components
import Scroll from '../pages/my-components/Scroll';

// example
import Order from './example/order/Order';
import OrderDetail from './example/order/OrderDetail';
import Modal from './example/modal/Modal';

function Main(){
    return (
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/Menu" exact component={Menu1} />
            <Route path="/Carousel" exact component={Carousel1} />
            <Route path="/Carousel3" exact component={Carousel3} />
            <Route path="/Modal1" exact component={Modal1} />
            <Route path="/PullToRefresh2" exact component={PullToRefresh2} />
            <Route path="/Scroll" exact component={Scroll} />
            <Route path="/Order" exact component={Order} />
            <Route path="/OrderDetail" exact component={OrderDetail} />
            <Route path="/Modal" exact component={Modal} />
        </Router>
    )
}
export default Main