// IMPORTS
import "./Adder.css"
import Button from "./Button"
import { Plus, Calendar, Shell, ClockAlert } from "lucide-react"

// EXPORT
export default function Adder() {
    return (            

        <div className="adder shadow">
            <input type="text" className="adder-input" placeholder="Add a blip..."/>
            
            <div className="adder-action-bar">
                <Button variant="icon-only" icon={<ClockAlert size={16}/>} id="critical-button" />
                <Button variant="icon-only" icon={<Shell size={16}/>} id="backburner-button" />
                <Button variant="icon-only" icon={<Calendar size={16}/>} id="scheduled-button" />
                <Button type="submit" variant="icon" icon={<Plus size={20}/>} id="adder-button" />
            </div>
        </div>
    
)
}