import React from "react";
import Link from "next/link";
import { urlFor } from "../library/client";

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`} />
			<div className="product-card">
				<img
					src={urlFor(image && image[0])}
					width={250}
					height={250}
					className="product-image"
				/>
				<p className="product-name">{name}</p>
				<p className="product-price">$ {price}.00 USD</p>
			</div>
		</div>
	);
};

export default Product;
