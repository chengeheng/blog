import { transComponent } from "./parseRoute";
import IndexPage from "./pages/index";
import Home from "./pages/home";
import Note from "./pages/note";

export const routers = [
	{
		path: "/",
		component: IndexPage,
		children: [
			{
				path: "/home",
				component: Home,
				title: "Home"
			},
			{
				path: "/note",
				component: Note,
				title: "Note"
			}
		]
	}
].map(transComponent);
