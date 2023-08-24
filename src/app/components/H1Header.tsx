import { Box } from "@mui/material"
import React from "react"

interface H1HeaderProps {
  title: string;
}

export const H1Header: React.FC<H1HeaderProps> = (props) => {

  const {title} = props

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
      <Box className="hover-underline-animation">
        <h1 style={{whiteSpace: "nowrap"}}>{title}</h1>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%"}}>
        <Box sx={{width: "100%", overflow: "hidden"}}>
          <Box className="h1HeaderLine" sx={{width: "50%", height: "3px", backgroundColor: "#C6BA9C", borderRadius: "2px"}}/>
        </Box>
      </Box>
    </Box>
  )
}