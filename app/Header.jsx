"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import Menu from "./Menu";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const pathname = usePathname();
	useEffect(() => {
		setShowMenu(false);
	}, [pathname]);

	return (
		<header className="bg-brand-blue">
			<div className="flex clear-gutters justify-between">
				<Logo />
				<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			</div>
			{showMenu ? <Menu /> : ""}
		</header>
	);
}
