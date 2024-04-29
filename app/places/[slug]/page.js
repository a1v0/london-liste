import { notFound } from "next/navigation";
import GlobalConfig from "./../../app.config.js";

export default function Place({ params: { slug } }) {
	const place = GlobalConfig.allPlaces.find((item) => {
		return item.slug === slug;
	});
	if (!place) {
		return notFound();
	}

	return <div></div>;
}
