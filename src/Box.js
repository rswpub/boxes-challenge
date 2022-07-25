import React from "react"

export default function Box(props) {

    const [isOn, setIsOn] = React.useState(props.isOn)

    function handleClick() {
        setIsOn(function (prevIsOn) {
            return !prevIsOn
        })
    }

    return (
        <div id={props.id} key={props.id} onClick={handleClick} className={"box " + (isOn ? "on" : "off")}>
            {`Box ${props.id}`}
        </div>
    )
}