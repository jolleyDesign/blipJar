import "./Adder.css"
import { Plus } from "lucide-react"

export default function Adder() {
    return (            
        <div className="adder">
            <input type="text" className="adder-input" placeholder="Add a blip..."/>
            <button type="submit" id="adder-button">
                <Plus size={24} />
            </button>
        </div>
    )
}