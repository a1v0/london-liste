import Link from "next/link.js";

export default function PlaceTile({ place }) {
	return (
		<Link href={`/places/${place.slug}`} key={place.slug} className={`group place-tile`}>
			<div className={`px-4 border-[white] group-hover:border-brand-blue rounded-md border-2 group-hover:bg-light-grey`}>
				<h3 className={`group-hover:underline`}>{place.name}</h3>
				<p className="uppercase">{place.type}</p>
				<p>{place.keyFacts[0]}</p>
			</div>
		</Link>
	);
}
