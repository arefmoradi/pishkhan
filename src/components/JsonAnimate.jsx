import { Player } from '@lottiefiles/react-lottie-player'
import { Box } from '@mui/material'
import React from 'react'

const JsonAnimate = ({src}) => {
  return (
    <Box sx={{
        borderRadius: "12px",
        // backgroundColor: "#8a9696",
        display: "flex",
        justifyContent: "center"
    }}>
        <Player 
        style={{width: "100px", height: "100px" , padding: "2px"}}
        src={src}
        hover

        />

    </Box>
  )
}

export default JsonAnimate