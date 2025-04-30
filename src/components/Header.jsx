// FILE IMPORT
import "./Header.css"
import Logo from "./Logo"
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
                <button>
                    <Umbrella size={24} />
                </button>
                <button>
                    <CircleUserRound size={24} />
                </button>
            </div>
        </div>
    )
}