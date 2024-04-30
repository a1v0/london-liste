import Link from "next/link";

export default function Menu() {
	return (
		<div className="bg-light-grey">
			<section className="clear-gutters">
				<ul id="menu-items" className="py-1">
					<Link href="/places">
						<li>
							<h2>All Places</h2>
							<p>
								A full list of all of our London
								recommendations.
							</p>
						</li>
					</Link>
					<Link href="/types">
						<li>
							<h2>Places by Type</h2>
							<p>
								Places grouped by type, e.g. parks, museums,
								places to eat.
							</p>
						</li>
					</Link>
					<Link href="/areas">
						<li>
							<h2>Places by Area</h2>
							<p>
								Places grouped by area, so you can plan your
								visit.
							</p>
						</li>
					</Link>
				</ul>
			</section>
		</div>
	);
}
