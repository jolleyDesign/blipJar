import "./AdderInput.css"
import { useState } from "react"
import Adder from "./Adder"

export default function AdderInput(props) {

    return(
            <input type="text"
            className="adder-input"
            placeholder="Add a blip..."
            value={props.value}
            onSubmit={props.onSubmit}
            onChange={props.onChange}
            />
    )
};
