import React, { use } from "react";
import { useState } from "react";
import { client } from "../library/client.js";
import { HeroBanner, Product, FooterBanner } from "../components/index.js";
import clean1 from "../public/assets/clean1.png";

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
				{products?.slice(0, 4).map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<div className="statements-container">
				<h2>What we stand for</h2>
				<button>Shop Our Products</button>
				<img src={clean1} />

				{/* displays clean ingredients, vegan, sustainable, cruelty free*/}
			</div>
			<div class="content-container">
				<div class="row">
					<div class="column">
						<div class="content-box-one border-box">
							<p className="box-one-tagline">
								Everybody needs a skincare routine.
							</p>
							<h2>
								Take good care of your skin and hydrate. If you have good,
								glowing skins, everything falls into place!
							</h2>
						</div>
					</div>
					<div class="column">
						<div class="content-box-two border-box"></div>
					</div>
				</div>
			</div>
			<div class="content-container">
				<div class="row">
					<div class="column">
						<div class="content-box-one skincare">
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

/**
 * 	const modal = document.getElementById("modal");
	const modalCloseBtn = document.getElementById("modal-close-btn");
	const subscribeForm = document.getElementById("subscribe-form");

	setTimeout(function () {
		modal.style.display = "inline";
	}, 1500);

	modalCloseBtn.addEventListener("click", function () {
		modal.style.display = "none";
	});

	subscribeForm.addEventListener("submit", function (e) {
		e.preventDefault();
		setTimeout(function () {
			document.getElementById("modal-inner").innerHTML = `
<div className="modal-inner-text">
	<p>Thank you for subscribing to our newsletter. We are thrilled to have you on board.</p>
</div>
			`;
		});
	});

	return (
		<div className="modal" id="modal">
			<div className="close-modal-container">
				<p>Subscribe</p>
				<button className="modal-close-btn" id="modal-close-btn">
					Close
				</button>
			</div>
			<div className="modal-inner" id="modal-inner">
				<h3>Save 10% off your order</h3>
				<p className="modal-text" id="modal-text">
					{" "}
					Subscribe to our newsletter and get 10% off your first order.
				</p>

				<form className="subscribe-form">
					<input
						type="email"
						name="email"
						aria-label="Email address"
						placeholder="Your email address"
					></input>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</div>
	)
 * 
 */
