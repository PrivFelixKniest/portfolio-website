import React from "react"
import { Box } from "@mui/material";
import { H1Header } from "../components/H1Header";

export const AboutMeSection: React.FC<any> = () => {
  return (
    <Box id="aboutme" className="section" >
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="About Me" />
          <Box className="flexCollapse" sx={{display: "flex", justifyContent: "space-between"}}>
            <Box className="gridItem">
              <p>I grew up in Frankfurt, Germany and quickly stumbled over game development as a child, after I had gotten my first computer. 
                <br />
                <br />
                With time, my passion for code matured and developed into what it is today and has enabled me to keep working on my software develoment skills.
                <br />
                <br />
                Today, I enjoy analyzing problems and developing solutions. I love conceptualising systems, finding real life applications for my skillset and seeing a project come to life piece by piece.
              </p>
            </Box>
            <Box className="gridItem">Image</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}