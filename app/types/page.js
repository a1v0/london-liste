import Link from "next/link.js";
import PlaceTile from "../PlaceTile.jsx";
import GlobalConfig from "../app.config.js";

export default function PlaceTypes() {
	const placesByType = GlobalConfig.placeTypes;
	const placeTypes = Object.keys(placesByType);

	return (
		<div>
			<article className="clear-gutters">
				<h1>Places by Type</h1>

				<ul className="ml-4">
					{placeTypes.map((placeType) => {
						return (
							<li key={placeType}>
								<Link href={`#${placeType}`}>{placeType}</Link>
							</li>
						);
					})}
				</ul>

				{placeTypes.map((placeType) => {
					const placesOfType = placesByType[placeType];
					return (
						<div key={placeType}>
							<h2 id={placeType}>{placeType}</h2>
							{placesOfType.map((place) => {
								return (
									<PlaceTile key={place.slug} place={place} />
								);
							})}
						</div>
					);
				})}
			</article>
		</div>
	);
}
