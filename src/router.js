import React, { Component } from "react";
import {
	Router,
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from "react-router-dom"; //Router在跳转时用到
// import xxx from "./xxx"; //添加你需要跳转的组件

class RouterDom extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Router>
						<Switch>
							{/* <Route path="/xxx" component={xxx} /> */}
							{/* <Redirect path="/" to={{ pathname: "/xxx" }} /> */}
							//默认跳转
						</Switch>
					</Router>
				</div>
			</BrowserRouter>
		);
	}
}

export default RouterDom;
