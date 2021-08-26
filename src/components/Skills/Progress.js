import ProgressBar from "@ramonak/react-progress-bar"
import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "styled-components"

const Progress = ({ max }) => {
  const [completed, setCompleted] = useState(0)
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    for (let x = 0; x <= max; x++) {
      setCompleted(x)
    }
  }, [max])

  return (
    <ProgressBar
      completed={completed}
      isLabelVisible={false}
      transitionDuration="2s"
      bgColor={themeContext.primaryColor}
      height="10px"
    />
  )
}

export default Progress
