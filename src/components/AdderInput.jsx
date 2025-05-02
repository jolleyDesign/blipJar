import "./AdderInput.css"
import { useState } from "react"
import Adder from "./Adder"

export default function AdderInput(props) {

    return(

            <input type="text"
                className="adder-input text-sm"
                placeholder="Add a blip..."
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                value={props.value}
                />

    )
};
