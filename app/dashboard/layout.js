import "@/styles/globals.css";
import { Providers } from "../providers";




export default function RootLayout({	
children,	}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>

				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

	<div className="px-5 container mx-auto">
				{children}
				</div>
				</Providers>
			</body>
		</html>
	);
}
