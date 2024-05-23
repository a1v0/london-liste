import Link from "next/link.js";
import PlaceTile from "../PlaceTile.jsx";
import GlobalConfig from "../app.config.js";

export const metadata = {
	title: "Places by Type – London-Liste",
};

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
						<section key={placeType}>
							<h2
								id={placeType}
								className={`border-b-2 border-brand-blue border-dotted`}
							>
								{placeType}
							</h2>
							<div className={`px-4`}>
								{placesOfType.map((place) => {
									return (
										<PlaceTile
											key={place.slug}
											place={place}
										/>
									);
								})}
							</div>
						</section>
					);
				})}
			</article>
		</div>
	);
}
