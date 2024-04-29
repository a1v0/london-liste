import Link from "next/link.js";

export default function PlaceTile({ place }) {
	return (
		<Link href={`/places/${place.slug}`} key={place.slug}>
			<div>
				<h2>{place.name}</h2>
				<p className="uppercase">{place.type}</p>
				<p>{place.description}</p>
			</div>
		</Link>
	);
}
