import { notFound } from "next/navigation";
import GlobalConfig from "../../app.config.js";
import Link from "next/link.js";

export default function PlaceType({ params: { typeName } }) {
	const placeType = GlobalConfig.placeTypes[typeName];
	if (!placeType) {
		return notFound();
	}

	return (
		<div>
			<article className="clear-gutters">
				<h1>hello</h1>{" "}
			</article>
		</div>
	);
}
