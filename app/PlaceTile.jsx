import Link from "next/link.js";

export default function PlaceTile({ place }) {
	return (
		<Link href={`/places/${place.slug}`} key={place.slug}>
			<div>
				<h3>{place.name}</h3>
				<p className="uppercase">{place.type}</p>
				<p>{place.description}</p>
			</div>
		</Link>
	);
}
