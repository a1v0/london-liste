import Link from "next/link";

export default function Menu() {
	return (
		<div className="bg-[orange]">
			<section className="clear-gutters">
				<ul>
					<Link href="#">
						<li>
							<strong>All Places</strong>
							<p>
								A full list of all of our London
								recommendations.
							</p>
						</li>
					</Link>
					<Link href="#">
						<li>
							<strong>Places by Type</strong>
							<p>
								Places grouped by type, e.g. parks, museums,
								places to eat.
							</p>
						</li>
					</Link>
					<Link href="#">
						<li>
							<strong>Place by Area</strong>
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
