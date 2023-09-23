import React from "react";
import { client } from "../library/client.js";
import { HeroBanner, Product, FooterBanner } from "../components/index.js";

const Home = ({ products, bannerData }) => {
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<div className="mission-container">
				<p>OUR MISSION</p>
				<h2>
					We are on a mission to help you reduce plastic waste in your skincare
					routine. It's simpler than it seems.
				</h2>
			</div>
			<div className="products-container">
				{/* displays 4 product images*/}
				{products?.map((product) => product.name)}
			</div>
			<div className="statements-container">
				<h2>What we stand for</h2>

				<button>Shop Our Products</button>
				{/* displays clean ingredients, vegan, sustainable, cruelty free*/}
			</div>
			<div class="content-container">
				<div class="row">
					<div class="column">
						<div class="content-box-one border-box">
							<p>Everybody needs a skincare routine.</p>
							<h2>
								Take good care of your skin and hydrate. If you have good,
								glowing skins, everything falls into place!
							</h2>
						</div>
					</div>
					<div class="column">
						<div class="content-box-two border-box">EMPTY</div>
					</div>
				</div>
			</div>
			<div class="content-container">
				<div class="row">
					<div class="column">
						<div class="content-box-one">
							<h2>Your skin has never looked this good!</h2>
							<p>@essenceskincare</p>
							<small>
								LEARN ABOUT SKINCARE PRODUCTS ON OUR INSTRAGRAM ACCOUNT
							</small>
						</div>
					</div>
					<div class="column">
						<div class="content-box-two">4 FOOTER IMAGES</div>
					</div>
				</div>
			</div>
			<FooterBanner />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};

export default Home;
