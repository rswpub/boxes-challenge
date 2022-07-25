import React from "react"

export default function Box(props) {

    return (
        <div id={props.id} onClick={function () { return props.toggle(props.id) }} className={"box " + (props.isOn ? "on" : "off")}>
            {`Box ${props.id}`}
        </div>
    )
}