import React from 'react';
import boxData from './boxes'

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxData)

  const boxList = boxArray.map(function (boxObject) {
    return <div id={boxObject.id} key={boxObject.id} onClick={handleClick} className={"box " + (boxObject.on ? "on" : "off")}>{ `Box ${boxObject.id}`}</div>;
  })

  function handleClick() {
    const clickedBox = 
    setBoxArray(function (prevBoxArray) {
      return 
    })
  }

  return (
    <div style={{ backgroundColor: props.darkMode ? "#222" : "#ccc" }}>
      {boxList}
    </div>
  );
}