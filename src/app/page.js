import React from "react";

const Home = () => {
	return (
		<>
			Hero-banner
			<div>
				<h2>Essential cruelty-free skincare for glowy and healthy skin</h2>
				<button>Shop Our Products</button>
			</div>
			<div>
				<p>OUR MISSION</p>
				<h2>
					We are on a mission to help you reduce plastic waste in your skincare
					routine. It's simpler than it seems.
				</h2>
				{/* displays 4 product images*/}
				{["Product 4", "Product 5", "Product 7", "Product 8"].map(
					(product) => product
				)}
			</div>
			<div>
				<h2>What we stand for</h2>
				<button>Shop Our Products</button>
				{/* displays clean ingredients, vegan, sustainable, cruelty free*/}
				{["Statement 1", "Statement 2", "Statement 3", "Statement 4"].map(
					(statement) => statement
				)}
			</div>
			<div>
				<p>Everybody needs a skincare routine.</p>
				<h2>
					Take good care of your skin and hydrate. If you have good, glowing
					skins, everything falls into place!
				</h2>
			</div>
			<div>
				<h2>Your skin has never looked this good!</h2>
				<p>@essenceskincare</p>
				<small>LEARN ABOUT SKINCARE PRODUCTS ON OUR INSTRAGRAM ACCOUNT</small>
				{/* 4 FOOTER IMAGES */}
			</div>
			footer
		</>
	);
};

export default Home;
