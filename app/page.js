import Link from "next/link";

export default function Home() {
	return (
		<main>
			<article className="clear-gutters">
				If you have any suggestions for places to add, please email them
				to <Link href="mailto:one@2345.co.uk">one@2345.co.uk</Link>.
			</article>
		</main>
	);
}
