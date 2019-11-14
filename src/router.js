import { transComponent } from "./parseRoute";

const menuRouters = [
	{
		path: "/note",
		component: () => import("./pages/note/main"),
		title: "Note"
	}
];
export const routers = [
	{
		path: "/",
		component: () => import("./pages/index"),
		title: "Main",
		menuRouters: menuRouters,
		children: [
			...menuRouters,
			{
				path: "/noteDetail",
				component: () => import("./pages/note/noteDetail"),
				title: "noteDetail"
			}
		]
	}
].map(transComponent);
