import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-brand-blue py-2">
			<div className="clear-gutters text-[white]">
				Copyright &copy; {new Date().getFullYear() + " "}
				<strong>
					<Link href="https://github.com/a1v0/">a1v0</Link>
				</strong>
				. All rights reserved.
			</div>
		</footer>
	);
}
