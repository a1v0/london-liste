import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

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
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Permanent+Marker&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div className="flex min-h-screen flex-col items-stretch justify-between">
					<Header />
					<div className="flex grow flex-col">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
