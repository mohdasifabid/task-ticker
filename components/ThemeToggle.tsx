"use client"
import { Toggle } from "@/components/ui/toggle"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"
    return (
        <Toggle
            aria-label="Theme Toggle"
            pressed={isDark}
            onPressedChange={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer"
        >
            {
                isDark ? <Moon /> : <Sun />
            }
        </Toggle>
    )
}