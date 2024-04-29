import GlobalConfig from "../app.config.js";
import Link from "next/link.js";

export default function Places() {
	const places = GlobalConfig.allPlaces;

	return (
		<div>
			<article className="clear-gutters">
				<h1>All Places</h1>
				{places.map((place) => {
					return (
						<Link href={`/places/${place.slug}`} key={place.slug}>
							<div>
								<h2>{place.name}</h2>
								<p className="uppercase">{place.type}</p>
								<p>{place.description}</p>
							</div>
						</Link>
					);
				})}
			</article>
		</div>
	);
}
