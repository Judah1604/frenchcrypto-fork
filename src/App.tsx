import "react";
import './main.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./pages/User/Dashboard";
import Overview from "./pages/User/overview/Overview";
import TopNav from "./pages/User/TopNav";

function App() {
    const pathname = useLocation().pathname

	return (
		<div className="text-white h-full">
			<div className={
				pathname.includes("/user") ? "wrapper" : ""
			}>
				<Dashboard />
				<div className="content">
					<TopNav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/user/overview" Component={Overview} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
