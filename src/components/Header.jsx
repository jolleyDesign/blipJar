// FILE IMPORT
import "./Header.css"
import Logo from "./Logo"
import Button from "./Button"
// ICON IMPORT
import { CircleUserRound } from "lucide-react"
import { Umbrella } from "lucide-react"

// MAIN FUNCTION
export default function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            
            <div className="nav-container">
                <Button variant="icon-only blue" icon={<Umbrella size={24} />} />
                <Button variant="icon-only blue" icon={<CircleUserRound size={24} />} />
            </div>
        </div>
    )
}