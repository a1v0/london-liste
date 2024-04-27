import "./globals.css";
import Header from "./Header";

export const metadata = {
	title: "London-Liste",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div>
					<Header />
					<div>{children}</div>
				</div>
			</body>
		</html>
	);
}
