import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routers } from "./router";
const App = _ => {
	return (
		<Switch>
			{routers.map(router => (
				<Route
					key={router.path}
					path={router.path}
					exact={false}
					component={router.component}
				/>
			))}
			<Redirect to={routers[0].path} />
		</Switch>
	);
};

export default App;
