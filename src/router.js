// import { transComponent } from "./parseRoute";
import Home from "./pages/home";
import Note from "./pages/note/main";
import NoteDetail from "./pages/note/noteDetail";
export const routers = [
	{
		path: "/",
		component: Home,
		title: "Home"
	},
	{
		path: "/note",
		component: Note,
		title: "Note"
	},
	{
		path: "/note/:id",
		component: NoteDetail,
		title: "Note"
	}
];
// ].map(transComponent);
