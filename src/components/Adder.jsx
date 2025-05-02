// IMPORTS
import "./Adder.css"
import AdderInput from "./AdderInput"
import Button from "./Button"
import { Plus, Calendar, Shell, ClockAlert } from "lucide-react"
import { useState } from "react"

// EXPORT
export default function Adder() {

    const [inputValue, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted, prevented default");
        setValue("");
    }

    return (            
        <form className="adder shadow"
        onSubmit={handleSubmit}>

            <AdderInput
            value={inputValue}
            onChange={handleChange}
            />
            
            <div className="adder-action-bar">
                <Button variant="icon-only"
                icon={<ClockAlert size={16}/>}
                id="critical-button" />

                <Button variant="icon-only"
                icon={<Shell size={16}/>}
                id="backburner-button" />

                <Button variant="icon-only"
                icon={<Calendar size={16}/>}
                id="scheduled-button" />

                <Button type="submit"
                variant="icon"
                icon={<Plus size={20}/>}
                id="adder-button" />
            </div>
        </form>
    
)
}