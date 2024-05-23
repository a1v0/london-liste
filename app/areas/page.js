import Link from "next/link.js";
import PlaceTile from "../PlaceTile.jsx";
import GlobalConfig from "../app.config.js";

export const metadata = {
	title: "Places by Area – London-Liste",
};

export default function PlaceAreas() {
	const placesByArea = GlobalConfig.areas;
	const areas = Object.keys(placesByArea);

	return (
		<div>
			<article className="clear-gutters">
				<h1>Places by Area</h1>

				<ul className="ml-4">
					{areas.map((area) => {
						return (
							<li key={area}>
								<Link href={`#${area}`}>{area}</Link>
							</li>
						);
					})}
				</ul>

				{areas.map((area) => {
					const placesInArea = placesByArea[area];
					return (
						<section key={area}>
							<h2
								id={area}
								className={`border-b-2 border-brand-blue border-dotted`}
							>
								{area}
							</h2>
							<div className={`px-4`}>
								{placesInArea.map((place) => {
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
