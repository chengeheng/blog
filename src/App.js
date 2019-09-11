import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { routers } from "./router";
import { parseRoute } from "./parseRoute";
const App = _ => {
	return (
		<Switch>
			{parseRoute(routers)}
			<Redirect to={routers[0].path} />
		</Switch>
	);
};

export default App;
