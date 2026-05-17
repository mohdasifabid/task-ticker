import Link from "next/link"
type NavMenuProps = {
    menuName: string;
    menuLink: string;
}

export const NavMenu = ({ menuName, menuLink }: NavMenuProps) => {
    return (
        <Link href={menuLink} className=" hover:text-blue-300 p-2">{menuName}</Link>
    )
}   