import PlaceTile from "../PlaceTile.jsx";
import GlobalConfig from "../app.config.js";

export const metadata = {
	title: "All Places – London-Liste",
};

export default function Places() {
	const places = GlobalConfig.allPlaces;

	return (
		<div>
			<article className="clear-gutters">
				<h1>All Places</h1>
				{places.map((place) => {
					return <PlaceTile key={place.slug} place={place} />;
				})}
			</article>
		</div>
	);
}
