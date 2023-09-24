import Link from "next/link";
import React from "react";
import { urlFor } from "../library/client";

const HeroBanner = ({ heroBanner }) => {
	return (
		<div className="hero-banner-container">
			<div>
				<img
					src={urlFor(heroBanner.image)}
					alt="products"
					className="hero-banner-image"
				/>
				<div className="">
					<Link href={`/product/${heroBanner.product}`}>
						<button type="button">{heroBanner.buttonText}</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
