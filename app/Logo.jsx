import Link from "next/link";

export default function Logo() {
	return (
		<div className="py-1 font-logo md:text-5xl text-4xl text-[white]">
			<Link href="/">London-Liste</Link>
		</div>
	);
}
