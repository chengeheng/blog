import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { routers } from "./router";
import { parseRoute } from "./parseRoute";
const App = _ => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				{parseRoute(routers)}
				<Redirect to={routers[0].path} />
			</Switch>
		</Suspense>
	);
};

export default App;
