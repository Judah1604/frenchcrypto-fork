import "./styles/styles.css";
import { useLocation } from "react-router-dom";

function TopNav() {
	const pathname = useLocation().pathname;

	return (
		<div
			className={pathname.includes("/user") ? "topnav active" : "topnav"}
		>
			<h1 className="header">
				{pathname.slice(6, pathname.length).split("-").join(" ")}
			</h1>
			<div className="col">
				<div className="search">
					<i className="fa-solid fa-magnifying-glass"></i>{" "}
					<input type="text" placeholder="Search..." />
				</div>
				<div className="notification">
					<i className="fa-regular fa-bell"></i>
				</div>
				<div className="mail">
					<i className="fa-regular fa-envelope"></i>
				</div>
                <div className="profile">
                    <i className="fa-regular fa-user"></i>
                </div>
			</div>
		</div>
	);
}

export default TopNav;
