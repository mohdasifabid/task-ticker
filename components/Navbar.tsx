import Link from "next/link"
import { NavMenu } from "./NavMenu"
import { ThemeToggle } from "./ThemeToggle"
import { Hamburger, Menu } from "lucide-react"
import MobileNavbar from "./MobileNavbar"
import { menuItems } from "@/app/config/menuList"

export const Navbar = () => {

    return (
        <nav className="flex justify-between p-4 w-full border-b border-zinc-200 dark:border-zinc-800">
            <MobileNavbar />
            <ul className="hidden md:flex ">
                {menuItems.map((item) => (
                    <NavMenu key={item.name} menuName={item.name} menuLink={item.link} />
                ))}

                <ThemeToggle />

            </ul>
            <div className="md:hidden">
                <ThemeToggle />

            </div>
        </nav>
    )
}