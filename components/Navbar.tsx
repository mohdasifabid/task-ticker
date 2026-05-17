import Link from "next/link"
import { NavMenu } from "./NavMenu"

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
            <h1 className="text-2xl font-bold">Task Ticker</h1>
            <ul>
                {menuItems.map((item) => (
                    <NavMenu key={item.name} menuName={item.name} menuLink={item.link} />
                ))}
            </ul>
        </nav>
    )
}