import "./globals.css";

export const metadata = {
	title: "London-Liste",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
