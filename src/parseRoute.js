import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import Loading from "cgh-ui/components/Loading";
import { Route } from "react-router-dom";

export const parseRoute = routers => {
	return (
		<Suspense fallback={<Loading loading={true} />}>
			<Switch>
				{routers.map(route => (
					<Route
						key={route.path}
						path={route.path}
						exact={!route.children}
						component={route.component}
					/>
				))}
				<Redirect to={routers[0].path} />
			</Switch>
		</Suspense>
	);
};

export const transComponent = routers => {
	let copyCom = { ...routers };
	if (copyCom.children) {
		copyCom.children = copyCom.children.map(transComponent);
		copyCom.menuRouters = copyCom.menuRouters.map(transComponent);
	}
	copyCom.component = getComponent(copyCom.component, {
		routes: copyCom.children,
		menuRouters: copyCom.menuRouters
	});
	return copyCom;
};

export const getComponent = (loader, props) => {
	const MouduleName = lazy(() => loader());
	return ownProps => <MouduleName {...props} {...ownProps} />;
};
