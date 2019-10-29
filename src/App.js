import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { routers } from "./router";
import { parseRoute } from "./parseRoute";
import Loading from "cgh-ui/components/Loading";
const App = _ => {
	return (
		<Suspense fallback={<Loading loading={true}></Loading>}>
			<Switch>
				{parseRoute(routers)}
				<Redirect to={routers[0].path} />
			</Switch>
		</Suspense>
	);
};

export default App;
