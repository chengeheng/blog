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
				component: A
			},
			{
				path: "/b",
				component: B
			}
		]
	}
].map(transComponent);
