import { useState } from "react";
import "../styles/styles.css";

function Overview() {
	const [toggle, setToggle] = useState("exchange");
	const [botToggle, setBotToggle] = useState("roi");
	const [drop, setDrop] = useState({ name: "Solana", img: "sol" });
	const [dropVisible, setDropVisible] = useState(false);

	const dropItems = [
		{ name: "BNB", img: "Coin" },
		{ name: "Solana", img: "sol" },
		{ name: "Etheureum", img: "eth" },
	];

	const handleClick = (item: { name: string; img: string }) => {
		setDrop({
			name: item.name,
			img: item.img,
		});
		setDropVisible(false);
	};

	return (
		<div className="overview">
			<div className="analysis">
				<div className="balance">
					<div className="text">
						<p>Current Balance</p>
						<div className="wrap">
							<h1>$78,564.34</h1>
							<span>+40%</span>
						</div>
						<div className="cryptos">
							<div className="item">
								<h3>
									<img src="/Coin.png" alt="BNB" />
									BNB
								</h3>
								<h2>$5,670</h2>
							</div>
							<div className="item">
								<h3>
									<img src="/eth.png" alt="Ethereum" />
									Ethereum
								</h3>
								<h2>$5,670</h2>
							</div>
							<div className="item">
								<h3>
									<img src="/sol.png" alt="Solana" />
									Solana
								</h3>
								<h2>$5,670</h2>
							</div>
						</div>
					</div>
					<img
						src="/3d-techny-metal-safe-and-money-around 1.png"
						alt="money"
						className="img"
					/>
				</div>
				<div className="graph">
					<img src="/graph.png" alt="graph" />
				</div>
				<div className="history">
					<div className="header">
						<h2>Trade History</h2>
						<button className="btn-blue">View All</button>
					</div>
					<div className="content">
						<div className="date">
							<h3>Date and Time</h3>
							<p>2024-06-13 16:42</p>
							<p>2024-06-13 16:42</p>
							<p>2024-06-13 16:42</p>
							<p>2024-06-13 16:42</p>
						</div>
						<div className="pairs">
							<h3>Pairs</h3>
							<p>BTC/USDT</p>
							<p>BTC/USDT</p>
							<p>BTC/USDT</p>
							<p>BTC/USDT</p>
						</div>
						<div className="type">
							<h3>Type</h3>
							<p>Buy</p>
							<p>Buy</p>
							<p>Buy</p>
							<p>Buy</p>
						</div>
						<div className="quantity">
							<h3>Quantity</h3>
							<p>0.0005 BTC</p>
							<p>0.0005 BTC</p>
							<p>0.0005 BTC</p>
							<p>0.0005 BTC</p>
						</div>
						<div className="fee">
							<h3>Fee</h3>
							<p>0.032 USDT</p>
							<p>0.032 USDT</p>
							<p>0.032 USDT</p>
							<p>0.032 USDT</p>
						</div>
						<div className="price">
							<h3>At Price</h3>
							<p>32,000</p>
							<p>32,000</p>
							<p>32,000</p>
							<p>32,000</p>
						</div>
					</div>
				</div>
			</div>
			<div className="personal">
				<div className="wallet">
					<h2>Your Wallet</h2>
					<div className="toggles">
						<div
							className={
								toggle === "buy" ? "toggle active" : "toggle"
							}
							onClick={() => setToggle("buy")}
						>
							Buy
						</div>
						<div
							className={
								toggle === "sell" ? "toggle active" : "toggle"
							}
							onClick={() => setToggle("sell")}
						>
							Sell
						</div>
						<div
							className={
								toggle === "exchange"
									? "toggle active"
									: "toggle"
							}
							onClick={() => setToggle("exchange")}
						>
							Exchange
						</div>
					</div>
					<div className="price">
						<div className="drop">
							<div
								className="drop-toggle drop-item"
								onClick={() => setDropVisible(!dropVisible)}
							>
								<img src={`/${drop.img}.png`} alt={drop.name} />
								<div className="text">
									<p>{drop.name} Price</p>
									<h3>{drop.name}</h3>
								</div>
								<div className="icon">
									<i className="fa-solid fa-chevron-down"></i>
								</div>
							</div>
							<div
								className={
									dropVisible
										? "drop-menu visible"
										: "drop-menu"
								}
							>
								{dropItems.map((item, index) => {
									return (
										<div
											className="drop-item"
											key={index}
											onClick={() => handleClick(item)}
										>
											<img
												src={`/${item.img}.png`}
												alt={item.name}
											/>
											<div className="text">
												<p>{item.name} Price</p>
												<h3>{item.name}</h3>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="amount">
						<div className="normal">
							<div className="text">
								<p>Amount</p>
								<input type="number" />
							</div>
							<div className="select">
								<select name="currency" id="currency">
									<option value="USD">USD</option>
									<option value="NGN">NGN</option>
									<option value="POU">POU</option>
									<i className="fa-solid fa-chevron-down"></i>
								</select>
							</div>
						</div>
						<div className="crypto">
							<div className="text">
								<p>Amount</p>
								<input type="number" />
							</div>
							<div className="select">
								<select name="crypto" id="crypto">
									<option value="BNB">BNB</option>
									<option value="SOL">SOL</option>
									<option value="ETH">ETH</option>
									<i className="fa-solid fa-chevron-down"></i>
								</select>
							</div>
						</div>
						<button className="btn-blue">Connect Wallet</button>
					</div>
				</div>
				<div className="bot">
					<h2>Trading Bot</h2>
					<div className="toggles">
						<div
							className={
								botToggle === "roi" ? "toggle active" : "toggle"
							}
							onClick={() => setBotToggle("roi")}
						>
							Top ROI
						</div>
						<div
							className={
								botToggle === "rnl" ? "toggle active" : "toggle"
							}
							onClick={() => setBotToggle("rnl")}
						>
							Top RNL
						</div>
						<div
							className={
								botToggle === "copied"
									? "toggle active"
									: "toggle"
							}
							onClick={() => setToggle("copied")}
						>
							Top Copied
						</div>
					</div>
					<div className="info">
						<div className="row">
							<div className="col">
								<h3>BTC/USDT</h3>
								<p className='label'>Spot Grid</p>
							</div>
							<div className="col">
								<i className="fa-solid fa-user-group"></i>
								12
							</div>
						</div>
						<div className="row">
							<p className="grey">ROI</p>
							<p className="green">2.89%</p>
						</div>
						<div className="row">
							<div className="col">
								<div className="grey">PNL (USD)</div>
								<h3>$9.42</h3>
							</div>
							<div className="col">
								<div className="grey">Duration</div>
								<h3>1d 8h 2m</h3>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<p>Min. Investment</p>
								<h3>122.5 USDT</h3>
							</div>
                            <div className="col">
                                <button className="btn-green">
                                    Active
                                </button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overview;
