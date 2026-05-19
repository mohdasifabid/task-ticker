"use client"
import { menuItems } from "@/app/config/menuList";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function ShadcnNavbar() {
    return (
        <nav className="bg-black dark:bg-white  dark:text-black text-white px-2">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link className="text-xl font-bold dark:text-black" href="/" >Task Ticker
                </Link>

                <Sheet>
                    <SheetTrigger className="md:hidden p-2 hover:bg-slate-800 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-64 bg-slate-900 text-white border-slate-800">
                        <div className="flex flex-col space-y-4 mt-8 pl-6">
                            {
                                menuItems?.map((item) => {
                                    return <SheetClose key={item.name} asChild>
                                        <a href={item.link} className="text-lg hover:text-blue-400">{item.name}</a>
                                    </SheetClose>
                                })
                            }

                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
