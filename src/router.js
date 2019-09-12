import { transComponent } from "./parseRoute";
import IndexPage from "./pages/index";
import A from "./pages/a";
import B from "./pages/b";

export const routers = [
	{
		path: "/",
		component: IndexPage,
		children: [
			{
				path: "/a",
				component: A,
				title: "a"
			},
			{
				path: "/b",
				component: B,
				title: "b"
			}
		]
	}
].map(transComponent);
