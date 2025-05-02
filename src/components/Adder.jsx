// IMPORTS
import "./Adder.css"
import AdderInput from "./AdderInput"
import Button from "./Button"
import { Plus, Calendar, Shell, ClockAlert } from "lucide-react"
import { useState } from "react"

// EXPORT
export default function Adder() {
    return (            

        <div className="adder shadow">
            <AdderInput />
            
            <div className="adder-action-bar">
                <Button variant="icon-only" icon={<ClockAlert size={16}/>} id="critical-button" />
                <Button variant="icon-only" icon={<Shell size={16}/>} id="backburner-button" />
                <Button variant="icon-only" icon={<Calendar size={16}/>} id="scheduled-button" />
                <Button type="submit" variant="icon" icon={<Plus size={20}/>} id="adder-button" />
            </div>
        </div>
    
)
}