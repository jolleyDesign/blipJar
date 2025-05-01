import "./Adder.css"
import { Plus } from "lucide-react"
import { Calendar } from "lucide-react"
import { Shell } from "lucide-react"
import { ClockAlert } from "lucide-react"

export default function Adder() {
    return (            

        <div className="adder shadow">
            <input type="text" className="adder-input" placeholder="Add a blip..."/>
            
            <div className="adder-action-bar">
                <button id="critical-button">
                    <ClockAlert size={16} className="icon-button"/>
                </button>
                <button id="backburner-button">
                    <Shell size={16} className="icon-button"/>
                </button>
                <button id="scheduled-button">
                    <Calendar size={16} className="icon-button"/>
                </button>
                <button type="submit" id="adder-button">
                    <Plus size={20} />
                </button>
            </div>

        </div>
    )
}