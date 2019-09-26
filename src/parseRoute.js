import React from "react";
import { Route } from "react-router-dom";

export const parseRoute = routers =>
	routers.map(router => (
		<Route
			key={router.path}
			path={router.path}
			// exact={!router.children}
			exact
			component={router.component}
		/>
	));

export const transComponent = routers => {
	let copyCom = { ...routers };
	if (copyCom.children)
		copyCom.children = copyCom.children.map(transComponent);
	copyCom.component = getComponent(copyCom.component, {
		routes: copyCom.children
	});
	return copyCom;
};

export const getComponent = (loader, props) => {
	const MouduleName = loader;
	return ownProps => <MouduleName {...props} {...ownProps} />;
};
