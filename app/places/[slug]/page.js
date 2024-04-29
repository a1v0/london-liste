import { notFound } from "next/navigation";
import GlobalConfig from "./../../app.config.js";
import Link from "next/link.js";
import PageLoader from "next/dist/client/page-loader.js";

export default function Place({ params: { slug } }) {
	const place = GlobalConfig.allPlaces.find((item) => {
		return item.slug === slug;
	});
	if (!place) {
		return notFound();
	}

	return (
		<div>
			<article className="clear-gutters">
				<h1>{place.name}</h1>
				{place.website ? (
					<p>
						(<Link href={place.website}>website</Link>)
					</p>
				) : (
					""
				)}
				<ul>
					{place.keyFacts.map((fact, index) => {
						return (
							<li key={index} className="list-disc ml-4">
								{fact}
							</li>
						);
					})}
				</ul>

				<p>
					<strong>Location:</strong> {place.location}
				</p>
				<p>
					<strong>Cost:</strong> {place.cost}
				</p>

				<p>{place.description}</p>
			</article>
		</div>
	);
}
