import { notFound } from "next/navigation";
import GlobalConfig from "../../app.config.js";
import PlaceTile from "@/app/PlaceTile.jsx";

export default function PlaceType({ params: { typeName } }) {
	const placeType = GlobalConfig.placeTypes[typeName];
	if (!placeType) {
		return notFound();
	}

	return (
		<div>
			<article className="clear-gutters">
				<h1>{placeType[0].type}s</h1>
				{placeType.map((place) => {
					return <PlaceTile place={place} />;
				})}
			</article>
		</div>
	);
}
