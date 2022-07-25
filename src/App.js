import React from 'react';
import Box from './Box'
import boxData from './boxes'

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxData)

  const boxList = boxArray.map(function (boxObject) {
    return <Box id={boxObject.id} isOn={boxObject.on} />
  })

  return (
    <div style={{ backgroundColor: props.darkMode ? "#222" : "#ccc" }}>
      {boxList}
    </div>
  );
}