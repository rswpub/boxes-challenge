import React from 'react';
import Box from './Box'
import boxData from './boxes'

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxData)

  const boxList = boxArray.map(function (boxObject) {
    return <Box key={boxObject.id} id={boxObject.id} isOn={boxObject.on} toggle={toggle} />
  })

  function toggle(boxId) {
    setBoxArray(function (prevBoxArray) {
      return [...prevBoxArray.slice(0, boxId - 1), {id: boxId, on: !prevBoxArray[boxId - 1].on}, ...prevBoxArray.slice(boxId)]
    })
  }

  return (
    <div style={{ backgroundColor: props.darkMode ? "#222" : "#ccc" }}>
      {boxList}
    </div>
  );
}