import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="sticky bg-brand-blue top-0">
			<div className="flex clear-gutters">
				<Logo />
				<Nav />
			</div>
		</header>
	);
}
