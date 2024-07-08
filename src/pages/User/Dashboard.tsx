import "./styles/styles.css";
import { useLocation } from "react-router-dom";

function Dashboard() {
	const pathname = useLocation().pathname,
		navItems = [
			{ link: "/user/overview", name: "Overview", icon: "chart-line" },
			{
				link: "/user/trading-bot",
				name: "Trading Bot",
				icon: "robot",
			},
			{ link: "/user/deposit", name: "Deposit", icon: "money-bill-transfer" },
			{ link: "/user/withdraw", name: "Withdraw", icon: "arrow-up-from-bracket" },
			{
				link: "/user/trade-history",
				name: "Trade History",
				icon: "clock-rotate-left",
			},
		]; // remember to add the image key to this array for the navitems ;)

	return (
		<div
			className={
				pathname.includes("/user") ? "dashboard active" : "dashboard"
			}
		>
			<img src="/Logo.svg" alt="Logo" />
			<div className="menu-items">
				<p>Manage</p>
				{navItems.map((item, index) => {
					return (
						<div
							className={
								pathname === item.link ? "item active" : "item"
							}
							key={index}
						>
							<i className={`fa-solid fa-${item.icon}`}></i>
							<a href={item.link}>{item.name}</a>
						</div>
					);
				})}
			</div>
			<div className="preferences">
				<p>Preferences</p>
				<div className="item">
					<i className="fa-solid fa-gear"></i>
					<a href="#">Settings</a>
				</div>
				<div className="item">
					<i className="fa-solid fa-arrow-right-from-bracket"></i>
					<a href="#">Log out</a>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
