import React from "react"
import { Box } from "@mui/material";
import { H1Header } from "../components/H1Header";
import Image from "next/image";

export const AboutMeSection: React.FC<any> = () => {
  return (
    <Box id="aboutme" className="section" >
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="About Me" />
          <Box className="flexCollapse" sx={{display: "flex", justifyContent: "space-between"}}>
            <Box className="gridItem">
              <Image src={"/portrait-slim.png"} width={1000} height={400} style={{width: "100%",height: "auto"}} alt="portrait" />
              <p style={{fontSize: "12px", fontStyle: "italic", textAlign: "right"}}>Photo by Anton Buddeberg: Me in front of the &quot;Honsellbrücke&quot; - Frankfurt</p>
            </Box>
            <Box className="gridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <p>I grew up in Frankfurt, Germany and quickly stumbled over game development as a child.
                <br />
                <br />
                With time, my passion for code matured and developed into what it is today and has enabled me to keep sharpening my software develoment skills.
                <br />
                <br />
                Today, I enjoy analyzing problems and developing solutions. I love conceptualising systems, finding real life applications for my skillset and seeing a project come to life piece by piece.
              </p>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}