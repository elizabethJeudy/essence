import Link from "next/link";
import React from "react";

const HeroBanner = ({ heroBanner }) => {
	return (
		<div className="hero-banner-container">
			<div>
				<img src="" alt="products" className="hero-banner-image" />
				<h3>{heroBanner.largeText1}</h3>
				<div className="">
					<Link href="/product/ID">
						<button type="button">{heroBanner.buttonText}</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
