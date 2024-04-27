import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="flex">
			<Logo />
			<Nav />
		</header>
	);
}
