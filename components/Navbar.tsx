import Link from "next/link"
import { NavMenu } from "./NavMenu"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
    const menuItems = [
        { name: "Dashboard", link: "/" },
        { name: "Upcoming Tasks", link: "/upcoming" },
        { name: "Completed Tasks", link: "/completed" },
        { name: "Analytics", link: "/analytics" },
        { name: "Settings", link: "/settings" },
    ]
    return (
        <nav className="flex justify-between p-4 w-full">
            <Link href="/" className="text-2xl font-bold cursor-pointer hover:text-orange-700 dark:hover:text-orange-700">Task Ticker</Link>
            <ul>
                {menuItems.map((item) => (
                    <NavMenu key={item.name} menuName={item.name} menuLink={item.link} />
                ))}
            </ul>
            <ThemeToggle />
        </nav>
    )
}