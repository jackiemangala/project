import "@/styles/globals.css";
import { Providers } from "./providers";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from "next/link"
import { Button } from "@nextui-org/button";




export default function RootLayout({	
children,	}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
      <div id="_next">

				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				<Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Zephal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Discord
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
	<div className="px-5 container mx-auto">
				{children}
				</div>
				</Providers>
        </div>
			</body>
		</html>
	);
}
