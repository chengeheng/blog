// import { transComponent } from "./parseRoute";
import { lazy } from "react";
// import Home from "./pages/home";
// import Note from "./pages/note/main";
// import NoteDetail from "./pages/note/noteDetail";

const Home = lazy(() => import("./pages/home"));
const Note = lazy(() => import("./pages/note/main"));
const NoteDetail = lazy(() => import("./pages/note/noteDetail"));
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
		path: "/notedetail",
		component: NoteDetail,
		title: "Note"
	}
];
// ].map(transComponent);
