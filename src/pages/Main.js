import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
import Carousel1 from '../pages/antd-components/DataDisplay/Carousel/Demo1';
import Carousel3 from '../pages/antd-components/DataDisplay/Carousel/Demo3';
import PullToRefresh2 from '../pages/antd-components/Gesture/pull-to-refresh/Demo2';
import Scroll from '../pages/my-components/Scroll';
function Main(){
    return (
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/Carousel" exact component={Carousel1} />
            <Route path="/Carousel3" exact component={Carousel3} />
            <Route path="/PullToRefresh2" exact component={PullToRefresh2} />
            <Route path="/Scroll" exact component={Scroll} />
        </Router>
    )
}
export default Main