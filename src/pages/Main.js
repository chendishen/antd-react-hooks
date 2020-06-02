import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
import PullToRefresh2 from '../pages/antd-components/Gesture/pull-to-refresh/Demo2';
function Main(){
    return (
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/PullToRefresh2" exact component={PullToRefresh2} />
        </Router>
    )
}
export default Main