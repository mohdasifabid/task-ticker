type NavMenuProps = {
  name: string;
  link: string;
};
export const menuItems: NavMenuProps[] = [
  { name: "Dashboard", link: "/" },
  { name: "Upcoming Tasks", link: "/upcoming" },
  { name: "Completed Tasks", link: "/completed" },
  { name: "Analytics", link: "/analytics" },
  { name: "Settings", link: "/settings" },
];
